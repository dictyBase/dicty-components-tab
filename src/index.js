import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Tabs from './Components/Tabs'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Panel, PanelBody, PanelTitle, PanelHeader } from 'dicty-components-panel'

const Content = (title, content) => {
    return (
        <Panel collapse>
          <PanelHeader>
            <PanelTitle>
              { title }
            </PanelTitle>
          </PanelHeader>
          <PanelBody>
            { content }
          </PanelBody>
        </Panel>
    )
}

const tabs = [
    {
        title: 'Tab 1',
        element: (
            Content('Blast', 'Content Goes Here')
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
const home = () => {
    return <div />
}

const Routes = () => {
    return (
        <BrowserRouter>
          <div>
            <Route path='/' component={ () => <div /> } />
            <Route path='/gene/:id' component={ (defaultProps) => { return <Tabs  { ...defaultProps} tabs={ tabs } /> } } />
          </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
