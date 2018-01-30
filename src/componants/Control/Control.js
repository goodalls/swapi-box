import React, { Component } from 'react';

export class Control extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  }
  
  render() {
    return (
      <div>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>Favorites</button>
      </div>
    );
  }
}

export default Control;
