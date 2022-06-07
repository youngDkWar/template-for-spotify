import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import App from "./components/App";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<App/>} />
        <Route path="/" element={<Main page="main" />} />
        <Route path="/search" element={<Main page="search" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  );

