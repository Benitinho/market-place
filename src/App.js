import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters: 
    [
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 };

 handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState ({counters});
    console.log("Delete called")
};

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState ({ counters});
    console.log("reset Called")
};

 handleIncrement = counter => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
    console.log("Increment called")
};

handleDecrement = counter => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
    console.log("Decrement called")
};


  render() { 
    return (
    <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter( c => c.value > 0 ).length}/>
      <main className='container'>
          <Counters 
          counters = {this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          />
      </main>
    </React.Fragment>
    );
  }
}
 
export default App;