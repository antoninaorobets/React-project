import React, {useEffect} from 'react'
import { Button, Card, Icon, Image, Label, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"



function ParkCard({ park,user,setUser }) {

    let parkCodes

     (user) ?  parkCodes = user.parkCodes  : parkCodes = []
    
    const handleSave = (e)=>{
        if (!user) {console.error("Login")}
        else {
        const id = user.id
        const data = {
            ... user,
            "parkCodes" : [...parkCodes,park.parkCode]
        }
      //  setUser(data)
            fetch(`http://localhost:3002/users/${id}`,{
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }).then(response => response.json())
            .then(data => setUser(data));
       }}

    return (
        <Card>
            <Image 
            src={park.images[0].url} 
            ui={false} 
            style={{ "height": "200px", "objectFit": "cover" }} />
            <Card.Content>
                <Card.Header>{park.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{park.addresses[0].city}, {park.addresses[0].stateCode}</span>
                </Card.Meta>
                <Card.Description>
                    {park.description}
                </Card.Description>
            </Card.Content>
            <div className="ui  attached two buttons" >
                <Button className='ui basic button'>
                    <Link to={`/parks/${park.parkCode}`} > See more </Link>
                </Button>
              {parkCodes.includes(park.parkCode)
                 ? <Button className='ui basic button' textColor="green"> Saved </Button>
                : <Button className='ui basic button' onClick={handleSave}> Save </Button>}
            </div>

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