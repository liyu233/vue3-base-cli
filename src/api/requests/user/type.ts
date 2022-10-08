export interface FnReturn<T> {
  ok: boolean;
  data: T;
  message: string;
}

export interface UserInfo {
  password: string | undefined;
  username: string | undefined;
}
