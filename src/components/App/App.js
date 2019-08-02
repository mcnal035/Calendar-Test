import React, {Component} from 'react';
import './App.css';
import Calendar from '../Calendar/Calendar';


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>Calender Test</h1>
      </header>
      <Calendar/>
    </div>
  );
}
}
export default App;
