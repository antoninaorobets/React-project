import React from 'react'
import {
  Container,

  Header,
  Image,
  List,
  Menu,
  Segment,
  Search, 
} from 'semantic-ui-react'



function BottomMenu() {
return (
  <div>
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        {/* <Divider inverted section /> */}
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)
}
export default BottomMenu;
