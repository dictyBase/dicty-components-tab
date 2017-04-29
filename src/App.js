import React, { Component } from 'react';
import Tabs from './Components/Tabs'
import './App.css';

const tabs = [
    {
        title: 'Tab 1',
        element: (
            <div style={ {height: 100, background: 'red'} }></div>
        ),
        link: 'blast'
    },
    {
        title: 'Tab 2',
        element: (
            <div style={ {height: 100, background: 'blue'} }></div>
        ),
        link: 'protein'
    },
    {
        title: 'Tab 3',
        element: (
            <div style={ {height: 100, background: 'green'} }></div>
        ),
        link: 'kek'
    },
    {
        title: 'Tab 4',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test'
    }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs tabs={ tabs } { ...this.props } />
      </div>
    );
  }
}

export default App;
