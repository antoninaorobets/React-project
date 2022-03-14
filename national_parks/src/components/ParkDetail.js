import React, { useEffect } from 'react'
import { Container, Header,Segment,Divider,Image } from 'semantic-ui-react'
import ImgCarousel from "./ImgCarousel"
import {useParams} from "react-router-dom"


function ParkDetail({allParks}) {
    const {code} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  const park = allParks.filter(park=>park.parkCode === code)[0]

    return (
        <div>
            <Header as='h2' style={{ marginTop: '5em', marginBottom: '1em' }}> {park.fullName}</Header>
            <Container >
            <ImgCarousel images={park.images}/>
            </Container>
    
            <Container text style={{ marginTop: '2em' }}>
                <p>{park.description}</p>
                <Divider inverted section />
                <p><strong>Directions:</strong> {park.directionsInfo}</p>
                <p><strong>Weather:</strong> {park.weatherInfo}</p>
                <p><strong>  {park.operatingHours[0].description}</strong></p>
                
                <Segment>
                    <p>
                    {park.addresses[0].city},    
                    {park.addresses[0].line1}, 
                    {park.addresses[0].line2}, 
                    {park.addresses[0].postalCode}, 
                    {park.addresses[0].stateCode}
                    </p>
                </Segment>
            </Container> 
          
           <a href={park.url} target="_blank" rel="noreferrer noopener" > Visit Park web site </a>
        </div>
    )
}

export default ParkDetail