import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { IndexLinks } from "./index-links/IndexLinks";

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLinks />} />
        <Route path="/app" element={<App />} />
        <Route path="/hello" element={<div>Hello!</div>} />
      </Routes>
    </BrowserRouter>
  );
};
