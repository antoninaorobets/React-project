import React, { useEffect, useState, useRef, useCallback  } from 'react'
import ParkCard from "./ParkCard"
import Filter from "./Filter"
import {
  Header,
  Card,
  Grid,
  Container
} from 'semantic-ui-react'


function ParksList({ allParks }) {
  const pageSize = 50
  const [parks, setParks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterBy, setFilterBy] = useState('All States')
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/parks/?_limit=${pageSize}&_start=${page * pageSize}`)
      .then(resp => resp.json())
      .then(data => {
        setParks([...parks,...data])
        setLoading(false)
        setHasMore(data.length > 0)
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
      fetch(`http://localhost:3000/parks/?_limit=${pageSize}`)
      .then(resp => resp.json())
      .then(data => {
        setParks(data)
      })
    }
  }, [filterBy])

  const observer = useRef()
  const lastCardRef = useCallback (node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
      console.log('has more?', hasMore)
      if (entries[0].isIntersecting && hasMore) {
        console.log('next page', hasMore)
        setPage(page => page + 1)}
    })
    if (node) observer.current.observe(node)
      
  }, [loading])

  const parksCards = parks.map((park, index) => {
    console.log("parks length",parks.length)
    if ((parks.length === (index + 1)) && (filterBy === 'All States') ) {
      console.log(index)
      return  <div ref={lastCardRef}> <ParkCard  key={park.id} park={park} /> </div>
    }
    else {
      return <ParkCard key={park.id} park={park} />
    }
  }
  )


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
      <Container style={{ marginTop: '4em'}} >
      <div>{loading && 'Loading...'}</div>
      {/* {filterBy === 'All States' ? <button type="pageItem" className="item" value={0} onClick={handleChangePage}>More Parks</button> : null}  */}
   </Container>
      
    </div >
  )
}

export default ParksList


