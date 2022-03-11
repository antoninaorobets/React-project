import React from "react"
import '../css/App.css';
import ParksList from "./ParksList"
import TopMenu from "./TopMenu"
import BottomMenu from "./Bottommenu"
import {  Search } from 'semantic-ui-react'
import useParksQuery from '../hooks/useParksQuery'


function App() {



return (
  <div className="App">
    <TopMenu>
        <Search 
          style={{ 'align-items': 'center', 'display': 'flex'  }}
          fluid
            />
    </TopMenu>
    <ParksList />
    <BottomMenu />
  </div>
);
}

export default App;
