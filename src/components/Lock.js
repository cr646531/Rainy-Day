import React from 'react';

export default class Lock extends React.Component{

  constructor(){
    super()
    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      solution: 1337
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if(!num.includes(event.target.value)){
      console.log('please enter a number');
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  onSubmit(event){
    event.preventDefault();

    const { one, two, three, four } = this.state;

    var submission = "" + one + two + three + four;
    submission *= 1;
    console.log("input: ", submission);
    console.log("solution: ", this.state.solution);

    if(this.state.solution === submission){
      console.log('success!');
    } else {
      console.log('invalid entry');
    }
  }


  render(){
    const { one, two, three, four } = this.state;

    return (
      <div>
      <form onSubmit={this.onSubmit} >
        <input type="text" name="one" maxLength="1" onChange={this.onChange}/>
        <input type="text" name="two" maxLength="1" onChange={this.onChange}/>
        <input type="text" name="three" maxLength="1" onChange={this.onChange}/>
        <input type="text" name="four" maxLength="1" onChange={this.onChange}/>
        <button>Submit</button>
      </form>
      
      </div>
    )
  }

  
}