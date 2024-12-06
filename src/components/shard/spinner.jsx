import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="loading..."
      style={{
        width: "100px",
        padding: "30px 0px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Spinner;
