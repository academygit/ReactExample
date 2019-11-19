import React, {Component} from 'react'
/***
 * This is an example class to show how to pass data to parent component by a callback function
 */
export default class Counter extends Component {

    handleChange = (e) => {
        this.props.example(this.props.exvalue + 1);            
    }

    render () {
        return (
        <div id="counter">
            <button onClick={((e) => this.handleChange(e))}>Click Me</button>
            <p>{this.props.exvalue}</p>
        </div>
        );
    }
}