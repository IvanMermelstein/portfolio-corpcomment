import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>I</p>
        </div>
        <div>
          <p>Ivan</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias
            veniam quos consectetur illum ad.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
