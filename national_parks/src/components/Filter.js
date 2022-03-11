import React, { Component } from 'react'
import states from "../states.json"
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render() {
    const { activeItem } = this.state
    const statesList =   states.map(st=><Menu.Item
        name={st.name}
        active={activeItem === ""}
        onClick={this.handleItemClick}
      /> )


    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          name='All States'
          active={activeItem === 'All States'}
          onClick={this.handleItemClick}
        />
        {statesList}
      </Menu>
    )
  }
}