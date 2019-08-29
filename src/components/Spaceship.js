// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
    render(){
        const {name, speed, hasRockets, colors} = this.props
        // console.log(speed)
        return <div>
            <p>{name}</p>
            <p>{speed}</p>
            <p>{hasRockets}</p>
            <ul>
                {colors.map(color => {
                    return <li>{color}</li>
                })}
            </ul>
        </div>
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black','red']
}