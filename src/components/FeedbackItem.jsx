import Card from "./shard/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteItem, editItem } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteItem(item.id)}>
        <FaTimes color="purple" fontSize={"22px"} />
      </button>
      <button className="edit" onClick={() => editItem(item)}>
        <FaEdit color="purple" fontSize={"22px"} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
