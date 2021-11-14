import Axios from "axios";
import { SERVER_URL } from "../constants/URLS";

export const AxiosCustomAPI = ({ method, ApiUrl, toSendData }) => {
  const token = localStorage.getItem("login") ?? "";

  console.log(toSendData);
  return new Promise((res, rej) => {
    Axios({
      method: method,
      url: `${SERVER_URL}${ApiUrl}`,
      headers: {
        Authorization: token,
      },
      data: {
        data: toSendData,
      },
    })
      .then((response) => {
        console.log(response);
        res(response);
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear();
        rej(err);
      });
  });
};
