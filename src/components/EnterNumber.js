import React, { Component } from 'react';

class  EnterNumber extends Component {
    constructor(props) {
        super(props);
        this.state = { number: '',
        }
    }


    addNumber = (event) => {
        event.preventDefault();
        console.log(`${this.state.number}`);

        const totalNumber = {
            number: this.state.number,
        };
        this.props.addTotalNumberToHistory(totalNumber);
    }
    onNumberChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.addTotalNumberToHistory}>
                <button type="submit">Up</button>
                <input onChange={this.onNumberChange} type="number" placeholder="enter number"/>
                <button type="submit">Down</button>
            </form>

        );
    }
}

export default EnterNumber;