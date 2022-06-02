import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<App/>} />
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Main />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
