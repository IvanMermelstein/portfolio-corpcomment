import FeedbackItem from "./FeedbackItem";
import Spinner from "../Layout/Spinner";
import ErrorMessage from "../Header/ErrorMessage";
import { TFeedbackItem } from "../../lib/types";
import { useFeedbackItemsContext } from "../../hooks/useFeedbackItemsContext";

const FeedbackList = () => {
  const { filteredFeedbackItems, isLoading, errorMessage } =
    useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackItem: TFeedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
};

export default FeedbackList;
