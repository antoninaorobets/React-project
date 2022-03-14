import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"


function ParkCard({ park }) {
    const imgStyle = {
        height: "200px"
    };
    return (
        <Card>
            <Image src={park.images[0].url} ui={false} style={{ "height": "200px", "objectFit": "cover" }} />
            <Card.Content>
                <Card.Header>{park.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{park.addresses[0].city}, {park.addresses[0].stateCode}</span>
                </Card.Meta>
                <Card.Description>
                    {park.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/parks/${park.parkCode}`}> See more </Link>
            </Card.Content>
        </Card>
    )
}

export default ParkCard


{/* <div className="ui card">
<div className="image" >
    <img style={imgStyle} src={park.images[0].url} />
</div>
<div className="content">
    <a className="header">{park.name}</a>
    <div className="meta">
        <span className="date">{park.addresses[0].city}, {park.addresses[0].stateCode}</span>
    </div>
    <div className="description">
        {park.description}
    </div>
</div>
<div className="extra content">
    <div className="ui star rating" data-rating="3"></div>
</div>
</div>
) */}