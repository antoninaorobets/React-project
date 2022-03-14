import React from 'react'
import {
  Container,
  Header,
  Image,
  Menu,
  Search, 
} from 'semantic-ui-react'



function TopMenu( {children}) {
return (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://i.pinimg.com/564x/31/62/43/316243641a7d3f464f3761fa79f0504b.jpg' style={{ marginRight: '1.5em' }} />
          National Parks
        </Menu.Item>
        <Menu.Item as='a'>My Page</Menu.Item>
        <Search
          style={{ 'alignItems': 'center', 'display': 'flex' }}
          fluid
        />
        <Menu.Item as='a' position='right' >Login</Menu.Item>
        
      </Container>
    </Menu>

   
  </div>
)
}
export default TopMenu
