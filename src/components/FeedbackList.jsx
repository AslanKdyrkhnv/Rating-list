import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import { motion, AnimatePresence } from "motion/react";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>the is no list</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default FeedbackList;
