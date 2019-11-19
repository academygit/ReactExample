import React, {Component} from 'react'
import Topic from './Topic.js'

export default class TopicList extends Component {

    render () {
        var list = this.props.topics.map((data, key) => {
                return (
                    <Topic data={data} id={data.id} key={key}/>
                  );
                });
        
        return (
            <table id='topic-list'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}