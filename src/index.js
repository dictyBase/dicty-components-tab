import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const home = () => {
    return <div />
}

const Routes = () => {
    return (
        <BrowserRouter>
          <Route path='/' component={ App }/>
        </BrowserRouter>
    )
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
