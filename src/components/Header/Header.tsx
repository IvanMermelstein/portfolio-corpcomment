import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";
import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

const Header = () => {
  // const { handleAddToList } = useFeedbackItemsContext();
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
};

export default Header;
