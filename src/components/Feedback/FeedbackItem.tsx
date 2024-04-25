import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemProps } from "../../lib/types";
import { useState } from "react";

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`feedback ${open ? "feedback--expand" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "New" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
};

export default FeedbackItem;
