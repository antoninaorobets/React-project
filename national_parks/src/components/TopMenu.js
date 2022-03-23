import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Image,
  Menu,
  Search,
} from 'semantic-ui-react'

function TopMenu({ isLoggin }) {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <NavLink to="/">
            <Menu.Item as='a' header>
              <Image size='mini' src='https://i.pinimg.com/564x/31/62/43/316243641a7d3f464f3761fa79f0504b.jpg' style={{ marginRight: '1.5em' }} />
              National Parks
            </Menu.Item>
          </NavLink>
          { (isLoggin)  ?  <NavLink to="/myparks" style={{ 'alignItems': 'center', 'display': 'flex' }}> <Menu.Item as='a'>My Parks</Menu.Item> </NavLink>   : null }
        </Container>
        <Search
          style={{ 'alignItems': 'center', 'display': 'flex' }}
          fluid
        />
{/* How to fix size of click area */}      
        <Menu.Item as='a' position='right' display="flex" style={{ 'alignItems': 'center' }}>
          { (isLoggin) ? <div>Logout</div>:
            <NavLink to="/login" style={{margin: "13px 16px"}} >Login</NavLink>}
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default TopMenu



