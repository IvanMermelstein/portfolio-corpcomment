import { useFeedbackItemsContext } from "../../hooks/useFeedbackItemsContext";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
