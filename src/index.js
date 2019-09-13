import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <div className="navbar">
        <Header />
      </div>
      <div>
        <Route path="/" component={App} />
      </div>
      <div>
        <Footer />
      </div>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
