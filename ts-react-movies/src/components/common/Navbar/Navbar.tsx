import * as React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className={cx("NavItem")}>
      <div className={cx("NavItem-Logo")}>TMI</div>
      <div>
        <ul className={cx("NavItem-Ul")}>
          <li className={cx("NavItem-Ul-Title")}>MOVIE</li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              exact
              to="/"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              Home
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/topRate"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              Top Rated
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/nowPlaying"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              Now Playing
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink to="/popular" activeClassName="active">
              Popular
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
