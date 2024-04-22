import { useState } from "react";
import { FEEDBACK_MAX_LENGTH } from "../lib/constants";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const charCount = FEEDBACK_MAX_LENGTH - text.length;

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > FEEDBACK_MAX_LENGTH) return;
    setText(event.target.value);
  };

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        value={text}
        onChange={handleOnChange}
        placeholder="blabla"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
