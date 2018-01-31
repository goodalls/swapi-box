import React, { Component } from 'react';
import './Control.css';

export class Control extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  }
  
  render() {
    return (
      <div className='control'>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>Favorites <span className='favorite'>0</span></button>
      </div>
    );
  }
}

export default Control;
