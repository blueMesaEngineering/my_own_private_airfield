import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
