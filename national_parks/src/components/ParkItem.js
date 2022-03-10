import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

function ParkItem({ park }) {
    const imgStyle = {
        'display': 'flex',
        'align-items': 'center'
      };
    return (
        <Item>
        <Item.Image style={imgStyle} src={park.images[0].url} />
  
        <Item.Content style={{'align': 'left'}}>
          <Item.Header as='a'>{park.name}</Item.Header>
          <Item.Meta>
            <span className='cinema'>{park.addresses[0].city}, {park.addresses[0].stateCode}</span>
          </Item.Meta>
          <Item.Description>{park.description}</Item.Description>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon='globe' content='Additional Languages' />
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
        </Item.Content>
      </Item>

       
    )
}

export default ParkItem


