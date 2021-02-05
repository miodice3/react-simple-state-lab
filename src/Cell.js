import React, { Component } from 'react';

export default class Cell extends Component {

    state = {color: ''}

    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    render(){
        return (
            <div style={{backgroundColor: {this.state.color.value}}}></div>
        )
    }

}