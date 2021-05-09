import "./App.css";
import SideMenu from "./components/SideMenu";
function App(props) {
  return (
    <div className="App">
      <SideMenu />
      {props.children}
    </div>
  );
}

export default App;
