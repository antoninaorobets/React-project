import React, { useState }  from 'react'
import parks_data from "../db_test.json"
import ParkCard from "./ParkCard"
import ParkItem from './ParkItem'
import ParkInformation from './ParkInformation'
import {
  Container,
  Divider,
  Header,
  Item,
  Card
} from 'semantic-ui-react'


function ParksList() {
    const [parks, setParks] = useState(parks_data.parks[0].data)
    const display_parks_Items = parks.map(park => <ParkItem key={park.id} park={park}/>)
    const display_parks_Cards = parks.map(park => <ParkCard key={park.id} park={park}/>)
  return (
    <div>
      <Header as='h1' style={{ marginTop: '5em', marginBottom: '1em' }}>National Parks in the United States</Header>
     
        {/* <Item.Group divided>
          {display_parks_Items}
        </Item.Group>
      
        <Divider inverted section /> */}

        <Card.Group floated >
          {display_parks_Cards}
        </Card.Group>



      <Divider inverted section />
      <ParkInformation park={parks[1]} />
    </div>
  )
}

export default ParksList