import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTypelessProvider } from "typeless";

import App from "./app/App";
import { IndexLinks } from "./index-links/IndexLinks";
import { FooModule } from "./misc/module";
import { CommonModule } from "./common-module";

const RootRoutes = () => {
  return (
    <CommonModule>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexLinks />} />
          <Route path="/app" element={<App />} />
          <Route path="/hello" element={<div>Hello!</div>} />
          <Route path="/foo" element={<FooModule />} />
        </Routes>
      </BrowserRouter>
    </CommonModule>
  );
};

export const Root = () => {
  return (
    <React.StrictMode>
      <DefaultTypelessProvider>
        <RootRoutes />
      </DefaultTypelessProvider>
    </React.StrictMode>
  );
};
