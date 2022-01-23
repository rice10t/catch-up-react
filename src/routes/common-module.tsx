import { FunctionComponent } from "react";
import * as Rx from "typeless/rx";
import {
  CommonActions,
  CommonState,
  useCommonModule,
} from "./common-interface";

useCommonModule
  .epic()
  .on(CommonActions.$mounted, () => {
    return CommonActions.getUserRequest();
  })
  .on(CommonActions.getUserRequest, () => {
    return Rx.from([0]).pipe(
      Rx.delay(2000),
      Rx.map(() =>
        CommonActions.getUserSuccess({ id: "abcde", name: "yamada" })
      )
    );
  });

const initialState: CommonState = {};

useCommonModule
  .reducer(initialState)
  .on(CommonActions.getUserSuccess, (state, { user }) => {
    state.user = user;
  });

export const CommonModule: FunctionComponent = (props) => {
  useCommonModule();
  return <>{props.children}</>;
};
