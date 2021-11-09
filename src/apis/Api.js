import Axios from "axios";

export const FetchApi = ({ method, fetchApiUrl, selectedIds }) => {
  const token = localStorage.getItem("login") ?? "";

  return new Promise((res, rej) => {
    Axios({
      method: method,
      url: `${process.env.REACT_APP_API_URL}${fetchApiUrl}`,
      headers: {
        Authorization: token,
      },
      data: {
        ids: selectedIds,
      },
    })
      .then((response) => {
        res(response);
      })
      .catch((e) => {
        localStorage.clear();
        rej(e);
      });
  });
};
