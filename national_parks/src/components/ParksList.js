import React, { useEffect, useState }  from 'react'
import parks_data from "../db_test.json"
//import parks_data from "../db.json"
import ParkCard from "./ParkCard"
import Filter from "./Filter"

import {
  Container,
  Divider,
  Header,
  Card,
  Grid,
} from 'semantic-ui-react'


function ParksList() {
    const allParks = parks_data.parks[0].data
    const [parks, setParks] = useState(allParks)
    const [filterBy, setFilterBy] = useState('All States')


useEffect (()=>{
  if (filterBy !== 'All States') {
    const displayParks = parks.filter(park => park.states === filterBy)
    setParks(displayParks)
  }
  else {
    setParks(allParks)
  }
}, [filterBy])
   
  const parksCards = parks.map(park => <ParkCard key={park.id} park={park}/>)

  return (
    <div>
      <Header as='h1' style={{ marginTop: '5em', marginBottom: '1em' }}>National Parks in the United States</Header>
      <Grid relaxed>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filter filterBy={filterBy} setFilterBy={setFilterBy} />
          </Grid.Column>

          <Grid.Column width={12}>
          <Card.Group  >
          {parksCards}
        </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted section />
      {/* <ParkInformation park={parks[1]} /> */}
    </div>
  )
}

export default ParksList