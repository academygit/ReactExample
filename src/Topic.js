import React, {Component} from 'react'

export default class Topic extends Component {
    render () {
        return (
            <tr className='topic'>
                <td>{this.props.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.description}</td>
            </tr>
        );
    }
}