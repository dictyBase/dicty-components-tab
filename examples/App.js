import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from '../src/Components/Tabs'
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
        title: 'Genomes',
        items: [
            {
                name: 'Genomes Home',
                href: 'http://www.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Tools',
        items: [
            {
                name: 'Tools Home',
                href: 'http://www.google.com'
            },
            {
              name: 'New Genome Browser',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Explore',
        items: [
            {
                name: 'Explore Home',
                href: 'http://www.google.com'
            },
            {
              name: 'Dicty Art',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Gallery',
                href: 'http://www.google.com'
            },
            {
              name: 'Genome Resources',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Genome Statistics',
                href: 'http://www.google.com'
            },
            {
              name: 'Learn About Dicty',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Teaching Protocols',
                href: 'http://www.google.com'
            },
            {
              name: 'Useful Links',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Research',
        items: [
            {
                name: 'Research Home',
                href: 'http://www.google.com'
            },
            {
              name: 'Anatomy Ontology',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Codon Bias Table',
                href: 'http://www.google.com'
            },
            {
              name: 'Nomenclature Guidelines',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Phenotyping',
                href: 'http://www.google.com'
            },
            {
              name: 'Techniques',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Dicty Stock Center',
        items: [
            {
              name: 'Stock Center Home',
              href: 'http://www.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Community',
        items: [
            {
              name: 'Community Home',
              href: 'http://www.google.com'
            },
            {
              name: 'Cite Us',
              href: 'http://www.google.com'
            },
            {
              name: 'Dicty Annual Conferences',
              href: 'http://www.google.com'
            }
        ]
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
        title: 'Gene Summary',
        element: (
            <div>
              { Content('Blast', 'Content Goes Here') }
              { Content('Content 2', 'P1????????\nP2~~~~~~~~~~~~~\n\nP3!!!!!!!!!!!!!') }
            </div>
        ),
        link: 'summary'
    },
    {
        title: 'Protein Information',
        element: (
            <div style={ {height: 100, background: 'blue'} }></div>
        ),
        link: 'proteininformation'
    },
    {
        title: 'Gene Ontology',
        element: (
            <div style={ {height: 100, background: 'green'} }></div>
        ),
        link: 'ontology'
    },
    {
        title: 'Orthologs',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'orthologs'
    },
    {
        title: 'Phenotypes',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'phenotypes'
    },
    {
        title: 'Reference',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'reference'
    },
    {
        title: 'BLAST',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'blast'
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
