import React from "react";
import { Link } from "react-router-dom";

export const IndexLinks = () => {
  return (
    <div>
      <div>
        <Link to={"/app"}>app</Link>
      </div>
      <div>
        <Link to={"/hello"}>hello</Link>
      </div>
    </div>
  );
};
