import { useFeedbackItemsContext } from "../../hooks/useFeedbackItemsContext";
import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

const Header = () => {
  const { handleAddToList } = useFeedbackItemsContext();
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
};

export default Header;
