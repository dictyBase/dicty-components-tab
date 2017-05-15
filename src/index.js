import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Tabs from './Components/Tabs'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Panel, PanelBody, PanelTitle, PanelHeader } from 'dicty-components-panel'
import { Navbar } from 'dicty-components-navbar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`
const Home = () => {
    return (
        <Container>
          <Link to='/gene/sadA'>
            gene
          </Link>
          <Link to='/gene/sadA/blast'>
            blast
          </Link>
          <Link to='/gene/sadA/kek'>
            kek
          </Link>
          <Link to='/gene/sadA/test'>
            test
          </Link>
        </Container>
    )
}
const items = [
    {
        dropdown: true,
        title: 'Dropdown 1',
        items: [
            {
                name: 'Link 1',
                href: 'http://www.google.com'
            },
            {
              name: 'Link 2',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Dicty Stock Center',
        items: [
            {
                name: 'Link 1',
                href: 'http://www.google.com'
            },
            {
              name: 'Link 2',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Link 3',
                href: 'http://www.google.com'
            },
            {
              name: 'Link 4',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        title: 'Link 1',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 2',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 3',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 4',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 5',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 6',
        href: 'http://www.google.com'
    }
]

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
        title: 'Blast',
        element: (
            <div>
              { Content('Blast', 'Content Goes Here') }
              { Content('Content 2', 'P1????????\nP2~~~~~~~~~~~~~\n\nP3!!!!!!!!!!!!!') }
            </div>
        ),
        link: 'blast'
    },
    {
        title: 'Protein',
        element: (
            <div style={ {height: 100, background: 'blue'} }></div>
        ),
        link: 'protein'
    },
    {
        title: 'Test 1',
        element: (
            <div style={ {height: 100, background: 'green'} }></div>
        ),
        link: 'test1'
    },
    {
        title: 'Test2',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test2'
    },
    {
        title: 'Test3',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test3'
    },
    {
        title: 'Test4',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test4'
    },
    {
        title: 'Test5',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test5'
    },
    {
        title: 'Test6',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test6'
    },
    {
        title: 'Test7',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test7'
    }
]

const Routes = () => {
    return (
        <BrowserRouter>
          <div>
            <Navbar items={ items } />
            <Route exact path='/' component={ () => <Home /> } />
            <Route path='/gene/:id' component={ (defaultProps) => { return <Tabs  { ...defaultProps} tabs={ tabs } /> } } />
          </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
)
