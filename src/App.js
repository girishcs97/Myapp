import React from 'react';
import './App.css';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (

   <div className="App">
     <h1>Counter Application</h1>
    <h3>Current Count Value: {this.state.count}</h3>
    <button className='inc' onClick={(e) => this.increment(e)}>Increment</button>
  </div>
    );
  }
};

export default Counter;
