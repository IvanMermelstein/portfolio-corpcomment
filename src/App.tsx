import Container from "./components/Container";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";

const App = () => {
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
};

export default App;
