import { useState } from "react";
import { FEEDBACK_MAX_LENGTH } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (item: string) => void;
};

const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const charCount = FEEDBACK_MAX_LENGTH - text.length;

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > FEEDBACK_MAX_LENGTH) return;
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.includes("#")) {
      alert("Please include a #hashtag for company name");
      return;
    }
    onAddToList(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
        <button disabled={text.length <= 0}>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
