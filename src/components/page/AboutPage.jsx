import Card from "../shard/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h4>this is version site for users</h4>
        <p>Version: 1.0.0</p>
        <Link to={"/"}>Back to previews page</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
