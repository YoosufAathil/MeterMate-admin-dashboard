import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new_user/New";
import Readings from "./pages/readings/Readings";
import Payments from "./pages/payments/Payments";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Login from "./pages/login/Login";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="readings">
              <Route index element={<Readings />} />
              <Route path=":readingId" element={<Single />} />
            </Route>
            <Route path="payments">
              <Route index element={<Payments />} />
              {/* <Route path=":paymentId" element={<Single />} /> */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
