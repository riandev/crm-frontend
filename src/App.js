import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SurveyBody from "./components/SurveyBody";
import Reports from "./components/Reports/Reports";
import Qc from "./components/Qc/Qc"

export const userContext = createContext();

function App() {
  const [loginInfo, setLoginInfo] = useState([]);
  return (
    <userContext.Provider value={[loginInfo, setLoginInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/dashboard/crm">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/dashboard/report">
            <Reports></Reports>
          </Route>
          <Route exact path="/dashboard/qc">
            <Qc></Qc>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
