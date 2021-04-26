import React, { Component } from 'react';
// import React, { PureComponent } from 'react';
//if you use PureComponent dont use sholdComponentUpdate
// class CounterButton extends PureComponent {
class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //update if component state changes
        //alternative is PureComponent changes when props changes but
        //shouldComponentUpdate is better because you have more control
        if (this.state.count !== nextState.count) {
            return true
        }
        return false
    }

    updateCount = () => {
        this.setState(state => {
            return {count: state.count  + 1}
        })
    }

    render() {
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;