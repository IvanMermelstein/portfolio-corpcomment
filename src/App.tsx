import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import HashtagList from "./components/Hashtag/HashtagList";
import FeedbackItemsContextProvider from "./contexts/FeedbackItemsContextProvider";

const App = () => {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
};

export default App;
