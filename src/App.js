import React, { Component } from 'react';

import './App.css';
import Snake from './components/Snake';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {top: 50, left:50, crash:false}
  }

  
  

render() {
  return (
    <div className="App-header">
      <Snake color="blue" top= {this.state.top} left ={this.state.left} />

    </div>
  );
}

keypress = (e) =>{
  e = e || window.event;
   
  console.log("you pressed ", e.keyCode);
  switch (e.keyCode) {
    case 37:
      this.setState({left: this.state.left-3})
      break;
    
    case 38:
    this.setState({top: this.state.top-3})
      break;
    
    case 39:
    this.setState({left: this.state.left+3})
      break;
    
    case 40:
    this.setState({top: this.state.top+3})
      break;

    default:
      break;
  }

  
}



componentDidMount() {
  document.onkeydown = this.keypress
}
}
export default App;
