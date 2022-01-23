import axios from "axios";

export const ZenApi = {
  getZen: () => {
    return axios
      .get("https://api.github.com/zen")
      .then<{ message: string }>((res) => {
        return { message: res.data };
      });
  },
};
