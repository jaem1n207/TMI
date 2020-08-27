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
              activeStyle={{ color: "#59babc" }}
            >
              Home
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/topRate"
              className={cx("NavItem-Ul-Li-Current")}
              activeStyle={{ color: "#59babc" }}
            >
              Top Rated
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/nowPlaying"
              className={cx("NavItem-Ul-Li-Current")}
              activeStyle={{ color: "#59babc" }}
            >
              Now Playing
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/upcoming"
              className={cx("NavItem-Ul-Li-Current")}
              activeStyle={{ color: "#59babc" }}
            >
              Upcoming
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-Li")}>
            <NavLink
              to="/popular"
              className={cx("NavItem-Ul-Li-Current")}
              activeStyle={{ color: "#59babc" }}
            >
              Popular
            </NavLink>
          </li>

          <br />

          {/* <li className={cx("NavItem-Ul-Title")}>TV</li>
          <li className={cx("NavItem-Ul-None NavItem-Ul-Li")}>
            <NavLink
              exact
              to="/tv"
              className={cx("NavItem-Ul-Li-CurrentTv ")}
              activeStyle={{ color: "#59babc" }}
            >
              Home
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-None NavItem-Ul-Li")}>
            <NavLink
              to="/tv/top-rate"
              className={cx("NavItem-Ul-Li-CurrentTv ")}
              activeStyle={{ color: "#59babc" }}
            >
              Top Rated
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-None NavItem-Ul-Li")}>
            <NavLink
              to="/tv/airing-today"
              className={cx("NavItem-Ul-Li-CurrentTv ")}
              activeStyle={{ color: "#59babc" }}
            >
              Airing Today
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-None NavItem-Ul-Li")}>
            <NavLink
              to="/tv/on-the-air"
              className={cx("NavItem-Ul-Li-CurrentTv ")}
              activeStyle={{ color: "#59babc" }}
            >
              On The Air
            </NavLink>
          </li>
          <li className={cx("NavItem-Ul-None NavItem-Ul-Li ")}>
            <NavLink
              to="/tv/popular"
              className={cx("NavItem-Ul-Li-CurrentTv")}
              activeStyle={{ color: "#59babc" }}
            >
              Popular
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
