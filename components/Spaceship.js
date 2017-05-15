import React from 'react'

const Spaceship = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.colors}</div>
      <div>{props.speed}</div>
    </div>
  )
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
	hasRockets: false
}

export default Spaceship
