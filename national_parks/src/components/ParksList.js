import React, { useEffect, useState, useRef } from 'react'
import ParkCard from "./ParkCard"
import Filter from "./Filter"

import {
  Divider,
  Header,
  Card,
  Grid,
  Pagination,
} from 'semantic-ui-react'


function ParksList({ allParks }) {
  const [parks, setParks] = useState([])
  const [filterBy, setFilterBy] = useState('All States')
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:3000/parks/?_limit=12&_start=${page * 12}`)
      .then(resp => resp.json())
      .then(data => {
        setParks([...parks,...data])
      })
  }, [page])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (filterBy !== 'All States') {
        const displayParks = allParks.filter(park => park.states === filterBy)
        setParks(displayParks)
    }
    else {
      setPage(0)
      fetch(`http://localhost:3000/parks/?_limit=12`)
      .then(resp => resp.json())
      .then(data => {
        setParks(data)
      })
    }
  }, [filterBy])


  const parksCards = parks.map(park => <ParkCard key={park.parkCode} park={park} />)

  const handleChangePage = (e) => {
    setPage(page+1)
  }

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

      {filterBy === 'All States' ? <button type="pageItem" className="item" value={0} onClick={handleChangePage}>More Parks</button> : null} 
   
      
    </div >
  )
}

export default ParksList


