import axios from "axios"

export const commonApi = async (httpMethod, url, reqBody) => {
  let reqConfiq = {
    method: httpMethod,
    url: url,
    data: reqBody,
    Headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(reqConfiq).then((result) => {
      return result;
    }).catch((err) => {
      return err;
    })
};

export default commonApi;