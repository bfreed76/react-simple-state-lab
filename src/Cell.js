import React, { Component } from 'react'

export default class Cell extends Component {
    
    constructor(props) {
        super(props)
        this.state ={
            color: props.value
        }
    }
    
    nextValue = () => {
        this.setState({
            color: '#333'
        })
    }
    
    //
   
    render() {
        // console.log('cell render', this.props)
        return (
            <div className='cell' onClick={this.nextValue} style={{backgroundColor: this.state.color}}> 
            </div>
        )
    }
}
