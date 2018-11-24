import React from 'react';
import { Link } from 'react-router-dom';

export default class Envelope extends React.Component{

  constructor(){
    super();
    this.state = {
      flag: 0
    }
    this.openLetter = this.openLetter.bind(this);
  }

  openLetter(){
    this.setState({
      flag: 1
    })
  }

  render(){
    return (
      <div>
        <Link to='/letter'><button>Open Letter</button></Link>
      </div>
    )}
}