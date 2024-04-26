import { createContext, useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";

type TFeedbackItemsContext = {
  feedbackItems: TFeedbackItem[];
  companyList: string[];
  isLoading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
  filteredFeedbackItems: TFeedbackItem[];
  selectedCompany: string;
  handleSelectCompany: (company: string) => void;
};

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

const FeedbackItemsContextProvider = ({
  children,
}: FeedbackItemsContextProviderProps) => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const badgeLetter = companyName.substring(0, 1).toUpperCase();

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      company: companyName,
      badgeLetter,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage("");
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch {
        setErrorMessage("Something went wrong.");
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems,
        isLoading,
        errorMessage,
        companyList,
        selectedCompany,
        filteredFeedbackItems,
        handleAddToList,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
};

export default FeedbackItemsContextProvider;
