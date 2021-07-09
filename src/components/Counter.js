import React, { Component } from 'react'
//rce
export class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
        }
    }

    increment() {
        /* this.setState({
            count: this.state.count + 1
        },() => {
            console.log('Callback value', this.state.count);
        }) */
        this.setState((state,props) => ({
         count: state.count + props.increment
        }))
        console.log(this.state.count);
    }
    incrementFive() {
        for(let i=0;i<5;i++) {
            this.increment();
        }
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div>Count: {count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
