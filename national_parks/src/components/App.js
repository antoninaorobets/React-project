import React from "react"
import '../css/App.css';
import ParksList from "./ParksList"
import TopMenu from "./TopMenu"
import BottomMenu from "./Bottommenu"
import { Search } from 'semantic-ui-react'
import useParksQuery from '../hooks/useParksQuery'
import { Route, Routes } from "react-router-dom";
import ParkInformation from './ParkInformation'
import parks_data from "../db_test.json"
import LoginForm from "./LoginForm";

function App() {



  return (
    <div className="App">
      <TopMenu/>
        
      <Routes>
        <Route exact path="/" element={<ParksList />}/>
        <Route path="/1" element={<ParkInformation park={parks_data.parks[0].data[1]}/>}/>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="*" element={<h2 style={{margin: "5em"}}>404 not found</h2> }/>

      </Routes>

      <BottomMenu />
    </div>
  );
}

export default App;
