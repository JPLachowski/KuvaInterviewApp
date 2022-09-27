import {BrowserRouter as Router, Link } from "react-dom-dom"
import Navigation from './Navigation'
import KuvaLogo from "../media/KuvaLogo.png";

function NavigationBar() {
  return (
    <div
      style={{
        height: "100%",
        width: "15%",
        backgroundColor: "#222222",
      }}
    >
      <img style={{ width: "95%" }} src={KuvaLogo} />
      <span style={{ marginTop: "30%", color: "white" }}> Home </span>
      <Navigation/>

    </div>
  );
}

export default NavigationBar;
