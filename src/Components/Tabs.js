import React, { Component } from 'react'
import styled from 'styled-components'
import { Link as RouterLink, Route } from 'react-router-dom'
import Pane from './Pane'
import findWithProp from '../Utils/findWithProp'

const Container = styled.div`
  padding: 20px;
`
const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  ${''/* align-items: flex-end; */}
  ${''/* justify-content:  */}
`
const Tab = styled.div`
  cursor: pointer;
  ${''/* transform: scale(${ props => props.active ? 1.2 : 1 }); */}
  box-shadow: ${ props => props.active ? '0px -3px 17px 0px rgba(50, 50, 50, 0.75)' : 'none' };
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  transition: all 0.2s ease;
  width: 100px;
  height: 40px;
  margin-right: 2px;
  margin-top: 1px;
`
const Link = styled(RouterLink)`
  height: 100%;
  display: block;
`
const Content = styled.div`
  position: relative;
  border: 1px solid black;
  transition: height 0.3s ease;
  height: auto;
`
type Props = {

}
type State = {
    activeIndex: number
}
export default class Tabs extends Component {
    constructor() {
        super()
        this.state = {
            activeIndex: 0
        }
    }
    changeTab = (i) => {
        this.setState({
            activeIndex: i
        })
    }
    renderTabs = () => {
        const { activeIndex } = this.state
        const { tabs, match } = this.props
        return tabs.map((tab, i) => {
            return (
              <Tab
                key={ i }
                active={ match.params.name === tab.link ? true : false }
              >
                <Link to={ tab.link } onClick={ () => { this.changeTab(i) }}>
                  { tab.title }
                </Link>
              </Tab>
            )
        })
    }
    renderPane = () => {
        const { activeIndex } = this.state
        const { tabs, match } = this.props
        console.log(match)
        return findWithProp(tabs, 'link', match.params.name).element
    }
    render() {
        return (
            <Container>
              <TabBar>
                { this.renderTabs() }
              </TabBar>
              <Content>
                <Route path='/:id' render={ this.renderPane } />
              </Content>
            </Container>
        )
    }
}
