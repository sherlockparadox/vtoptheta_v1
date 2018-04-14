import React, { Component } from 'react';
import './App.css';
import VerticalLinearStepper from './components/stepper_timetable'
import SimpleTabs from './components/tabs_menu'
import SimpleMenu from './components/logout'
import IntegrationReactSelect from './components/autocomplete_search'

class App extends Component {
  render() {
    return (
      <div className="Wrapper01">
        
        <SimpleMenu />
        
        <div className="Premium">
            <div className="search_size">
            <IntegrationReactSelect />
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
