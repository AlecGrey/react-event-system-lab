// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    
    handleFocusEvent = (event) => {
        console.log('Good!')
    }

    handleBlurEvent = (event) => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={ this.handleFocusEvent } onBlur={ this.handleBlurEvent }></button>
        )
    }
    
}

export default EyesOnMe