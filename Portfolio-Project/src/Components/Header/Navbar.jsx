import { useState } from "react";
import "./Navbar.css";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im"
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" style={{height: MenuOpen ? '320px' : '90px'}}>
      <div>
        <Link id="Port" to="./Portfolio">
          Portfolio
        </Link>
      </div>
      <ul id={MenuOpen ? "Open" : ""} className="navbar-items">
        <li>
          <Link className="navbar-item" to="./Aboutme">
            About Me
          </Link>
        </li>
        <li>
          <NavLink className="navbar-item" to="./Skills">
            Skills
          </NavLink>
        </li>
        <li className="portfoliohide">
          <NavLink className="navbar-item" id="Portfolio" to="./Portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" to="./Education">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" to="./Contactme">
            Contact Me
          </NavLink>
        </li>
      </ul>
      <div className="Menu">
        {MenuOpen ? (
          <span>
            <ImCross
              className="Cross"
              onClick={() => setMenuOpen(!MenuOpen)}
            />
          </span>
        ) : (
          <span>
            <IoReorderThree
              className="Threelines"
              onClick={() => setMenuOpen(!MenuOpen)}
            />
          </span>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
