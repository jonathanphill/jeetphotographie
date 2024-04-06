import kuljitLogo from "../assets/Jeetphotographie-logos.jpeg";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="wrapper">
      <nav>
        <div className="navigation">
          <div className="navLogo">
            <img
              src={kuljitLogo}
              alt="logo with text jeetphotographie and an image of a mountain"
            />
          </div>
          <div className="navItems">
            <ul>
              <Link to={`/`}>
                <li>HOME</li>
              </Link>
              <Link to={`/work`}>
                <li>WORK</li>
              </Link>
              <Link to={`/aboutMe`}>
                <li>ABOUT ME</li>
              </Link>
              <Link to={`/contact`}>
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
