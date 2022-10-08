import type { FnReturn, UserInfo } from "@/api/requests/user/type";
import AxiosService from "@/api/http/index";

const urls = {
  login: `/api/~`,
};

export const apiUserManager = {
  /*
   * login
   * 登录
   * */
  login(params: UserInfo): Promise<FnReturn<any>> {
    return AxiosService.post(urls.login, params);
  },
};
