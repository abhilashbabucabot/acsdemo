import React from "react";
import { useContext } from "react";
import { useState } from "react";

interface Identity {
  name: string;
  communicationUserId: string;
}
export interface UserInfo {
  identity: Identity;
  token: string;
  expiresOn: string;
}
interface UserInfoContextValue {
  userInfo?: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
}
const initialValue = {} as UserInfoContextValue;
const UserInfoContext = React.createContext<UserInfoContextValue>(initialValue);
interface UserInfoProviderProps {
  children: JSX.Element;
}
export function UserInfoProvider({ children }: UserInfoProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export function useUserInfo() {
  return useContext(UserInfoContext);
}
