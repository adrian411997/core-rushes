import { putRequest } from "../utils/functions/axios";
import { URL_BACKEND, URL_BACKEMD_REGISTER } from "../common/Endpoints";
import { IUser } from "../interfaces/User.interface";

export const RegisterService = async (data: IUser) => {
  const response = await putRequest(
    `${URL_BACKEND}${URL_BACKEMD_REGISTER}`,
    data
  );
  return response.data;
};
