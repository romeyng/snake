import React, { Component } from 'react';

import './App.css';
import Snake from './components/Snake';

class App extends Component{

render() {
  return (
    <div className="App-header">
      <Snake color="red" />

    </div>
  );
}

keypress = (e) =>{
  e = e || window.event;
  console.log("you pressed ", e.keyCode);
  
}

componentDidMount() {
  document.onkeydown = this.keypress
}
}
export default App;
