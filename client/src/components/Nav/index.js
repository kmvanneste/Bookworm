import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" href="/">
          React Reading List
        </Link>
      </nav>
    );
  }

export default Nav;
