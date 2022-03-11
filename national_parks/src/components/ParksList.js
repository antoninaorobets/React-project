import React, { useState }  from 'react'
import parks_data from "../db_test.json"
import ParkCard from "./ParkCard"
import Filter from "./Filter"
import ParkInformation from './ParkInformation'
import {
  Container,
  Divider,
  Header,
  Card,
  Grid,
} from 'semantic-ui-react'


function ParksList() {
    const [parks, setParks] = useState(parks_data.parks[0].data)
 
    const display_parks_Cards = parks.map(park => <ParkCard key={park.id} park={park}/>)
  return (
    <div>
      <Header as='h1' style={{ marginTop: '5em', marginBottom: '1em' }}>National Parks in the United States</Header>
      <Grid relaxed>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filter />
          </Grid.Column>

          <Grid.Column width={12}>
          <Card.Group  >
          {display_parks_Cards}
        </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted section />
      <ParkInformation park={parks[1]} />
    </div>
  )
}

export default ParksList