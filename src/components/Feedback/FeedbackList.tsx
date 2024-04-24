import FeedbackItem from "./FeedbackItem";
import Spinner from "../Layout/Spinner";
import ErrorMessage from "../Header/ErrorMessage";
import { TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

const FeedbackList = ({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) => {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedbackItem: TFeedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
};

export default FeedbackList;
