import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import SideMenu from "./components/SideMenu";
function App(props) {
  return (
    <Router>
    <div className="App">
      <SideMenu />
      <Switch>
          <Route path="/index">
            <h1> home </h1>
          </Route>
          <Route path="/notes">
            <h1> notes </h1>
          </Route>
          <Route path="/job-search">
            <h1> Job Search </h1>
          </Route>
          <Route path="/to-do">
            <h1> To Do </h1>
          </Route>
          <Route path="/schedule">
            <h1> Schedule </h1>
          </Route>
          <Route path="/account">
            <h1> Account </h1>
          </Route>
          <Route path="/gpa-calculator">
            <h1> GPA Calculator </h1>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
