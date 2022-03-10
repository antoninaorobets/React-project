import React from "react"
import '../css/App.css';
import ParksList from "./ParksList"
import TopMenu from "./TopMenu"
import BottomMenu from "./Bottommenu"


function App() {
  

return (
  <div className="App">
    <TopMenu></TopMenu>
    <ParksList />
    <BottomMenu />
  </div>
);
}

export default App;
