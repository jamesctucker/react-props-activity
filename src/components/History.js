import React, { Component } from 'react';

class History extends Component {
    render() {
        const numberHistory = [];
        for(let number of this.props.totalNumber) {
            let numberListItem = (<li>{number.number}</li>);
            numberHistory.push(numberListItem);
        }
        return (
            <div>
                <h2>History</h2>
                <ul>
                    {numberHistory}
                </ul>
            </div>
        );
    }
}

export default History;