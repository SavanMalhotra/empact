import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import SideMenu from "./components/SideMenu";
import HomePage from "./components/HomePage"
import NotesPage from "./components/NotesPage"
function App(props) {
  return (
    <Router>
    <div className="App">
      <SideMenu />
      <Switch>
          <Route path="/index">
            <div className="pagecontainer">
                <HomePage />
            </div>
          </Route>
          <Route path="/notes">
          <div className="pagecontainer">   
                <NotesPage />
           </div> 
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
