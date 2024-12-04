import Card from "../components/shard/Card";
import { useState } from "react";
import Button from "./shard/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
import { useContext, useEffect } from "react";
function FeedbackForm() {
  const { addItem, feedbackEdit } = useContext(FeedbackContext); // add from context
  const [text, setText] = useState(""); // text in input
  const [rating, setRating] = useState(10); // rating in RatingSelect
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Input value must be more then 10 letters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      var newFeedback = {
        text,
        rating,
      };
    }

    setText("");
    addItem(newFeedback);
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect handleSelect={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="leave your rate"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" version={"primary"} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
