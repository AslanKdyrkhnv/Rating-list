import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import feedBackData from "../data/feedBackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteItem = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addItem = (item) => {
    item.id = uuidv4();
    setFeedback([item, ...feedback]);
  };

  const editItem = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
    setFeedback(
      feedback.filter((ele) => ele.id !== item.id && ele.text !== item.text)
    );
  };

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Hello world",
      rating: 7,
    },
    {
      id: 2,
      text: "Hello world 2",
      rating: 9,
    },
    {
      id: 3,
      text: "Hello world 3",
      rating: 5,
    },
    {
      id: 4,
      text: "Hello world 4",
      rating: 8,
    },
  ]);
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        addItem,
        editItem,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
