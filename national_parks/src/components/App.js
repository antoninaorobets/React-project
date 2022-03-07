import React, { useEffect, useState } from "react"
import '../App.css';

function App() {
  const [parks, setParks] = useState([])
  useEffect(() => {
    fetch("https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks", {
      "method": "GET",
      "headers": {
        "x-api-key": "IfH1db76rkBBoCesZzQV8fyHMNJmSfuI2xu3KT0g",
        "x-rapidapi-host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
        "x-rapidapi-key": "03cbacb2d6msh147d7e91d53a89fp189018jsn4c2e0d1cd811"
      }
    })
      // fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5", {
      // 	"method": "GET",
      // 	"headers": {
      // 		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
      // 		"x-rapidapi-key": "03cbacb2d6msh147d7e91d53a89fp189018jsn4c2e0d1cd811"
      // 	}
      // })
      .then(resp => resp.json())
      .then(data => setParks(data))
      .catch(err => {
        console.error(err);
      });
  }, [])

  console.log(parks)
return (
  <div className="App">
    <header className="App-header">
      My project
    </header>
  </div>
);
}

export default App;
