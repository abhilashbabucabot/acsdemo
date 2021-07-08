import { useEffect } from "react";
import { UserInfo, useUserInfo } from "contexts/userInfo";
import users from "utils/users.json";
import { useHistory } from "react-router-dom";

function getUserInfo(userName: string): UserInfo | undefined {
  return users.find((user) => user.identity.name === userName);
}

export function useLogin(userName: string) {
  const history = useHistory();
  const { setUserInfo, userInfo } = useUserInfo();
  useEffect(() => {
    if (userInfo) history.push("/chat");
  }, [userInfo, history]);
  function loginHandler() {
    const user = getUserInfo(userName);
    setUserInfo(user);
  }
  return loginHandler;
}
