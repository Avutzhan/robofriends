import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <button
                id='counter'
                color={this.props.color}
                onClick={() => this.setState(state => ({count: state.count  + 1}))}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;