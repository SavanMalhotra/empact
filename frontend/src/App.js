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
            <div className="pagecontainer">  <h1> Home </h1> </div>
          </Route>
          <Route path="/notes">
          <div className="pagecontainer">   <h1> Notes </h1> </div>
          </Route>
          <Route path="/job-search">
          <div className="pagecontainer">   <h1> Job Search </h1> </div>
          </Route>
          <Route path="/to-do">
          <div className="pagecontainer">  <h1> To Do </h1> </div>
          </Route>
          <Route path="/schedule">
          <div className="pagecontainer">   <h1> Schedule </h1> </div>
          </Route>
          <Route path="/account">
          <div className="pagecontainer"> <h1> Account </h1></div>
          </Route>
          <Route path="/gpa-calculator">
          <div className="pagecontainer">  <h1> GPA Calculator </h1> </div>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
