import kuljitLogo from "../assets/jeetphotographie-logos.jpeg";
import "./Header.css";

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
                <li><a href=""></a>HOME</li>
                <li><a href=""></a>WORK</li>
                <li><a href=""></a>PAGES</li>
                <li><a href=""></a>BLOG</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
