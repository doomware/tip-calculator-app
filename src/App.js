import { Fragment } from "react";
import "./assets/styles/App.scss";
import Card from "./components/card";

function App() {
  return (
    <Fragment>
      <div className="App">
        <img src="./images/logo.svg" className="img-logo" alt="logo" />
        <Card />
      </div>
    </Fragment>
  );
}

export default App;
