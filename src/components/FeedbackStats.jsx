import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let avarage =
    feedback.reduce((total, cur) => {
      return total + cur.rating;
    }, 0) / feedback.length;

  avarage = avarage.toFixed(1).replace(/[,.]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>Reviews: {feedback.length}</h4>
      <h4>Avarage review {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  );
};

export default FeedbackStats;
