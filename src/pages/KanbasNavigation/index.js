import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiHome, BiGroup } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Home", "Problems"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Home: <BiHome className="wd-icon" />,
    Problems: <FaBook className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/pages/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
