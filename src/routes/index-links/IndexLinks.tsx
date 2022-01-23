import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const MyLink = (props: PropsWithChildren<{ to: string }>) => {
  return (
    <div>
      <Link to={props.to}>{props.children}</Link>
    </div>
  );
};

export const IndexLinks = () => {
  return (
    <div>
      <MyLink to="/app">app</MyLink>
      <MyLink to="/hello">hello</MyLink>
      <MyLink to="/foo">foo</MyLink>
    </div>
  );
};
