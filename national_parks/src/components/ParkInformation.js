import React from 'react'
import ImageGroup from "./ImageGroup"
import { Container, Header,Segment,Divider } from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel"

function ParkInformation({ park }) {
    console.log(park)
    return (
        <div>
            <Header as='h2' style={{ marginTop: '5em', marginBottom: '1em' }}> {park.fullName}</Header>
            <ImageGroup images={park.images} />
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
            {/* <ImageCarousel images={park.images}/> */}
            
        </div>
    )
}

export default ParkInformation