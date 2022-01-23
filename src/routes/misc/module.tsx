import React from "react";
import * as Rx from "typeless/rx";
import { FooActions, FooState, useFooModule } from "./interface";

import { Foo } from "./Foo";
import { ZenApi } from "../../api/zen";
import { SearchApi } from "../../api/search";

useFooModule
  .epic()
  .on(FooActions.$mounted, () => {
    return FooActions.getZen();
  })
  .on(FooActions.getZen, () => {
    return Rx.from(ZenApi.getZen()).pipe(
      Rx.map((zenMessage) => FooActions.getZenSuccess(zenMessage.message))
    );
  })
  .on(FooActions.searchRequest, ({ query }) => {
    return Rx.from(SearchApi.searchRepositories(query)).pipe(
      Rx.map((result) => FooActions.searchSuccess(result))
    );
  });

const initialState: FooState = {
  zenMessage: "",
  searchResult: [],
};

useFooModule
  .reducer(initialState)
  .on(FooActions.getZenSuccess, (state, { message }) => {
    state.zenMessage = message;
  })
  .on(FooActions.searchRequest, (state) => {
    state.searchResult = [];
  })
  .on(FooActions.searchSuccess, (state, { result }) => {
    state.searchResult = result;
  });

export const FooModule = () => {
  useFooModule();
  return <Foo />;
};
