import React from "react"
import '../css/App.css';
import ParksList from "./ParksList"
import TopMenu from "./TopMenu"
import BottomMenu from "./Bottommenu"
import { Search } from 'semantic-ui-react'
import useParksQuery from '../hooks/useParksQuery'
import { Route, Routes } from "react-router-dom";
import ParkDetail from './ParkDetail'
//import parks_data from "../db_test.json"
import parks_data from "../db.json"
import LoginForm from "./LoginForm";


function App() {
  const allParks = parks_data.parks

  return (
    <div className="App">
      <TopMenu/>
        
      <Routes>
        <Route exact path="/" element={<ParksList allParks={allParks} />}/>
        <Route path="/parks/:code" element={<ParkDetail allParks={allParks} />}/>
        <Route path="/login" element={<LoginForm/>} />
      </Routes>

      <BottomMenu />
    </div>
  );
}

export default App;
