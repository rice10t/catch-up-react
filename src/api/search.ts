import axios from "axios";

export const SearchApi = {
  searchRepositories: (query: string) => {
    return axios
      .get("https://api.github.com/search/repositories", {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        params: {
          q: query,
        },
      })
      .then<SearchRepositoriesResult>((res) => {
        return res.data.items.map((item: any) => ({
          name: item.name,
          description: item.description,
        }));
      });
  },
};

export type SearchRepositoriesResult = Array<{
  name: string;
  description: string;
}>;
