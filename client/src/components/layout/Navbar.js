import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiBug } from "react-icons/bi";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              
                c<BiBug/>ccinella
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
