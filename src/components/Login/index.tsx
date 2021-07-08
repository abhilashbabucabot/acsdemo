import { useState } from "react";
import { useLogin } from "./useLogin";

export function Login() {
  const [name, setName] = useState("");
  const loginHandler = useLogin(name);
  return (
    <div>
      Login:
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
