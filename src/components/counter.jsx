import React, { Component } from 'react';

class Counter extends Component {

    render() { 


        return (
            <div>

                <img src='https://picsum.photos/100' alt='Tof'></img>
                
                <span className={this.btnButton()}>{this.formatCount()}</span>

                <button onClick={() => this.props.onIncrement(this.props.counter)} 
                        className='btn btn-success btn-sm'>+</button>

                <button onClick={() => this.props.onDecrement(this.props.counter)} 
                        className='btn btn-info btn-sm m-2'>-</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                        className='btn btn-danger btn-sm'>Delete</button>

                <br></br><br></br>

            </div>
        );
    }

    btnButton() {
        let classes = 'btn btn-primary m-2 btn-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    };

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
};
 
export default Counter;