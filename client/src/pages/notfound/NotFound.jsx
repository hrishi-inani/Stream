import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <div className="msgContainer">
          <h2 className="msg">Oops! Page Not found</h2>
        </div>
        <Link to="/" className="link">
          <div className="backToHome">
            <span className="homemsg">HOME</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
