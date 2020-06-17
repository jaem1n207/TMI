import * as React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.scss";
import classNames from "classnames/bind";
import { RiMovieLine } from "react-icons/all";

const cx = classNames.bind(style);

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className={cx("NavItem")}>
      <div className={cx("NavItem-Logo")}>
        <RiMovieLine
          className={cx("NavItem-Logo-icon")}
          viewBox="0 0 34 34"
          color="#f5c518"
        />
        <NavLink
          exact
          to="/"
          className={cx("NavItem-Ul-Li-Current")}
          activeClassName={cx("NavItem-Ul-Li-Current")}
        >
          <div className={cx("NavItem-Logo-Title")}>TMI</div>
        </NavLink>
      </div>
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
            <NavLink
              to="/upcoming"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              Upcoming
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink to="/popular" activeClassName="active">
              Popular
            </NavLink>
          </li>

          <br />

          <li className={cx("NavItem-Ul-Title")}>TV</li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              exact
              to="/tv"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              Home
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/tv/topRate"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              Top Rated
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/tv/today"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              Airing Today
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/tv/ontheair"
              className={cx("NavItem-Ul-Li-Current")}
              activeClassName={cx("NavItem-Ul-Li-Current")}
            >
              On The Air
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
