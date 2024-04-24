import { TFeedbackItem } from "../../lib/types";
import FeedbackList from "../Feedback/FeedbackList";
import Header from "../Header/Header";

type ContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

const Container = ({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddToList,
}: ContainerProps) => {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default Container;
