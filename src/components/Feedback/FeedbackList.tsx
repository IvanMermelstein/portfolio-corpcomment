import FeedbackItem from "./FeedbackItem";
import Spinner from "../Layout/Spinner";
import ErrorMessage from "../Header/ErrorMessage";
import { TFeedbackItem } from "../../lib/types";
import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";

const FeedbackList = () => {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );

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
