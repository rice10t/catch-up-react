import { createModule } from "typeless";
import { CommonSymbol } from "./common-symbol";

export const [useCommonModule, CommonActions, getCommonState] = createModule(
  CommonSymbol
)
  .withActions({
    $mounted: null,
    getUserRequest: null,
    getUserSuccess: (user: User) => ({ payload: { user } }),
  })
  .withState<CommonState>();

export interface CommonState {
  user?: User;
}

export type User = {
  id: string;
  name: string;
};
