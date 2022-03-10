import React from 'react'
//import ImageGroup from "./ImageGroup"
import { Container, Header } from 'semantic-ui-react'
//import ImageCarousel from "./ImageCarousel"

function ParkInformation({ park }) {
    console.log(park)
    return (
        <div>
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h2' style={{ marginTop: '5em',marginBottom: '1em'}}> {park.fullName}</Header>
                {/* <ImageGroup images={park.images} /> */}
                <p>{park.description}</p>
                <p>{park.directionsInfo}</p>
            </Container>
           {/* <ImageCarousel images={park.images}/> */}

        </div>
    )
}

export default ParkInformation