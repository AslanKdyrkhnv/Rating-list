import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    feedbackFetch();
  }, []);

  // GET method
  const feedbackFetch = async () => {
    const respnose = await fetch(`/feedback`);
    const data = await respnose.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // DELETE method
  const deleteItem = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // POST method
  const addItem = async (item) => {
    const respnose = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await respnose.json();
    setFeedback([data, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        isLoading,
        addItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
