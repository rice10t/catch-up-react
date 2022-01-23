import React, { ChangeEvent, Fragment, useState } from "react";
import { useActions } from "typeless";
import { FooActions, getFooState } from "./interface";
import { getCommonState } from "../common-interface";

export const Foo = () => {
  const { getZen, searchRequest } = useActions(FooActions);

  const commonState = getCommonState.useState();
  const fooState = getFooState.useState();

  const [form, setForm] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRequest(form);
  };

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        {commonState.user ? `ID: ${commonState.user.id}` : "logging in"}
      </div>
      <div>Zen message: {fooState.zenMessage}</div>
      <button onClick={() => getZen()}>Reload zen</button>
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          Search:{" "}
          <input
            type="text"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
          <input type="submit" />
        </form>
        <div>
          {fooState.searchResult.map((res, index) => (
            <Fragment key={index}>
              <div>{res.name}</div>
              <div>{res.description}</div>
              <hr />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
