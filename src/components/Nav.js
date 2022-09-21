import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

function Nav() {
  return (
    <div className="list">
      <div className="icon">
        <h3>
          {" "}
          Introduction to React<FaReact />{" "}
        </h3>
      </div>
      <div className="liNav">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Courses101">Courses</Link>
          <Link to="/About">About</Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
