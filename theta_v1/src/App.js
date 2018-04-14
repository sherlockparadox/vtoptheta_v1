import React, { Component } from 'react';
import './App.css';
import VerticalLinearStepper from './components/stepper_timetable'
import SimpleTabs from './components/tabs_menu'

class App extends Component {
  render() {
    return (
      <div className="Wrapper01">
        
        <div className="Premium">
            <div className="search_size">
            </div>
        </div>
        
        <div className="menu">
            <SimpleTabs />
        </div>
        
        <div className="right-box">
            <VerticalLinearStepper />
        </div>
      </div>
    );
  }
}

export default App;
