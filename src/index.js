import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Main from "./routes/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Uso de Rotas no React com react-router-dom */}
        <Route path="/" exact element={<App />} />
        <Route path="/main/:username" element={<Main />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
