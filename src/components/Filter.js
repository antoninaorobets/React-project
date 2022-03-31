import React, { useState } from 'react'
import states from "../states.json"
import { Menu } from 'semantic-ui-react'

function Filter({filterBy, setFilterBy}) {
   
  const handleItemClick = (e) => {
    if (e.target.text !== 'All States') {
      setFilterBy(states.find(state => state.name === e.target.text).abbreviation)}
      else {
        setFilterBy('All States')
      }
  }

    const statesList = states.map(st=>{
      const selected = st.abbreviation
      return (
      <Menu.Item
        key={selected}
        name={st.name}
        active = {filterBy === selected}
        onClick={handleItemClick}
      />
      )} 
      )

    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          key='all'
          name='All States'
          active = {filterBy === 'All States'}
          onClick={handleItemClick}
        />
        {statesList}
      </Menu>
    )
  }


export default Filter;

