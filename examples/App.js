import React from "react"
import ReactDOM from "react-dom"
import Tabs from "../src/Components/Tabs"
import { BrowserRouter, Route, Link } from "react-router-dom"
import {
  Panel,
  PanelBody,
  PanelTitle,
  PanelHeader,
} from "dicty-components-panel"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`
const Home = () => {
  return (
    <Container>
      <Link to="/gene/sadA">gene</Link>
      <Link to="/gene/sadA/blast">blast</Link>
      <Link to="/gene/sadA/kek">kek</Link>
      <Link to="/gene/sadA/test">test</Link>
    </Container>
  )
}

const Content = (title, content) => {
  return (
    <Panel collapse>
      <PanelHeader>
        <PanelTitle>{title}</PanelTitle>
      </PanelHeader>
      <PanelBody>{content}</PanelBody>
    </Panel>
  )
}

const tabs = [
  {
    title: "Gene Summary",
    element: (
      <div>
        {Content("Blast", "Content Goes Here")}
        {Content("Content 2", "P1????????\nP2~~~~~~~~~~~~~\n\nP3!!!!!!!!!!!!!")}
      </div>
    ),
    link: "summary",
  },
  {
    title: "Protein Information",
    element: <div style={{ height: 100, background: "blue" }} />,
    link: "proteininformation",
  },
  {
    title: "Gene Ontology",
    element: <div style={{ height: 100, background: "green" }} />,
    link: "ontology",
  },
  {
    title: "Orthologs",
    element: <div style={{ height: 100, background: "goldenrod" }} />,
    link: "orthologs",
  },
  {
    title: "Phenotypes",
    element: <div style={{ height: 100, background: "goldenrod" }} />,
    link: "phenotypes",
  },
  {
    title: "Reference",
    element: <div style={{ height: 100, background: "goldenrod" }} />,
    link: "reference",
  },
  {
    title: "BLAST",
    element: <div style={{ height: 100, background: "goldenrod" }} />,
    link: "blast",
  },
]

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={() => <Home />} />
        <Route
          path="/gene/:id"
          component={defaultProps => {
            return <Tabs {...defaultProps} tabs={tabs} />
          }}
        />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Routes />, document.getElementById("root"))
