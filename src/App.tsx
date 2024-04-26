import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import HashtagList from "./components/Hashtag/HashtagList";
import { useFeedbackItemsStore } from "./store/feedbackItemsStore";
import { useEffect } from "react";

const App = () => {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
};

export default App;
