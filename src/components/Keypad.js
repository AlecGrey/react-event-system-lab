// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

    handleKeyUpEvent = (event) => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input type='password' onKeyUp={ this.handleKeyUpEvent }/>
        )
    }

}

export default Keypad