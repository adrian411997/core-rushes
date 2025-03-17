import { IUser } from "../interfaces/User.interface";
import { postRequest } from "../utils/functions/axios";
import {
  URL_BACKEND,
  URL_BACKEND_LOGIN_SIGN_IN,
  URL_BACKEND_LOGIN_SIGN_OUT,
} from "../common/Endpoints";

export const loginInService = (data: IUser) => {
  console.log(URL_BACKEND);

  const response = postRequest(
    `${URL_BACKEND}${URL_BACKEND_LOGIN_SIGN_IN}`,
    data
  );

  return response;
};
export const loginOutService = (data: IUser) => {
  const response = postRequest(
    `${URL_BACKEND}${URL_BACKEND_LOGIN_SIGN_OUT}`,
    data
  );

  return response;
};
