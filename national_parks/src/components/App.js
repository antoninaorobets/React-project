import React, {useState} from "react"
import '../css/App.css';
import ParksList from "./ParksList"
import TopMenu from "./TopMenu"
import BottomMenu from "./Bottommenu"
import { Route, Routes,useNavigate ,Navigate} from "react-router-dom";
import ParkDetail from './ParkDetail'
//import parks_data from "../db_test.json"
import parks_data from "../db.json"
import LoginForm from "./LoginForm";
import MyParks from "./MyParks";
import {UserProvider} from "../context/user"
import CreateAccount from "./CreateAccount"


function App() {
  const allParks = parks_data.parks
  const [isLoggin, setIsLoggin] = useState(false)
  const [user,setUser] = useState(
    // {
    //   id: "2",
    //   email: "xxx",
    //   parkCodes: ["afbg","abli"],
    // }
  )
  const navigate = useNavigate()

  const onLoggin=()=>{
    setIsLoggin(true)
   navigate("/myparks")
  }

  return (
    <div className="App">
      <UserProvider>
        <TopMenu isLoggin={isLoggin} />
          
        <Routes>
          <Route exact path="/" element={<ParksList allParks={allParks} user={user} setUser={setUser}/>}/>
          <Route path='/myparks' element={ (isLoggin)
            ? <MyParks allParks={allParks} user={user} setUser={setUser} /> 
            :  <Navigate replace to="/" />  } /> 
          <Route path="/parks/:code" element={<ParkDetail allParks={allParks} />}/>
          <Route path="/login" element={<LoginForm onLoggin={onLoggin} setUser={setUser}/>} />
          <Route path="/create" element={<CreateAccount onLoggin={onLoggin} setUser={setUser}/>} />
        </Routes>
      </UserProvider>

      <BottomMenu />
    </div>
  );
}

export default App;
