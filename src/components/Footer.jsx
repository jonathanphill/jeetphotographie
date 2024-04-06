import "./Footer.css"; // Importing the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <footer className="wrapper footer">
      <div className="container">
        <div>
          <p>Copyright &copy; 2024 by jeetphotographie </p>
        </div>
        <div className="faIcons">
          <ul className="faIconsList">
            <li>
              <Link
                to={`/`}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://www.instagram.com/jeetphotographie/");
                }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://www.instagram.com/jeetphotographie/");
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
