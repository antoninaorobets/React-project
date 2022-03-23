import React from 'react'

import {
    Header,
    Card,
    Container,
  } from 'semantic-ui-react'
  import ParkCard from './ParkCard'


function MyParks({allParks, user, setUser}) {
  console.log("user on my page",user)
  console.log("user on my page",user.parkCodes)

    
    const displayParks =  allParks.filter(park => user.parkCodes.includes(park.parkCode))
    const parksCards = displayParks.map((park, index) => <ParkCard key={park.id} park={park} user={user} setUser={setUser} />)
  return (
      <div>
          <Container textAlign='center'>
          <Header as='h1' style={{ marginTop: '5em', marginBottom: '1em' }}> My collection</Header>
            <Card.Group>
                {parksCards}
            </Card.Group>
            </Container>
      </div>
  )
}

export default MyParks