import { createModule } from "typeless";
import { FooSymbol } from "./symbol";
import { SearchRepositoriesResult } from "../../api/search";

export const [useFooModule, FooActions, getFooState] = createModule(FooSymbol)
  .withActions({
    $mounted: null,
    /** zen を取得 */
    getZen: null,
    getZenSuccess: (message: string) => ({ payload: { message } }),
    searchRequest: (query: string) => ({ payload: { query } }),
    searchSuccess: (result: SearchRepositoriesResult) => ({
      payload: { result },
    }),
  })
  .withState<FooState>();

export interface FooState {
  zenMessage: string;
  searchResult: SearchRepositoriesResult;
}
