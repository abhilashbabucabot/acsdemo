import { Chat } from "./components/Chat";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserInfoProvider } from "./contexts/userInfo";
function App() {
  return (
    <UserInfoProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </UserInfoProvider>
  );
}

export default App;
