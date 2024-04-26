import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";

export const useFeedbackItemsContext = () => {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error("Context is not defined");
  }
  return context;
};
