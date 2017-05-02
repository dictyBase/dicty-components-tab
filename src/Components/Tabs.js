import React, { Component } from 'react'
import styled from 'styled-components'
import { Link as RouterLink, Route, Redirect, Switch } from 'react-router-dom'
// import Pane from './Pane'
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
  padding: 20px;
  transition: height 0.3s ease;
`
type Props = {

}
type State = {
    activeTab: ?string
}
export default class Tabs extends Component {
    constructor() {
        super()
        this.state = {
            activeTab: null
        }
    }
    changeTab = (i) => {
        this.setState({
            activeIndex: i
        })
    }
    renderTabs = () => {
        const { tabs, match } = this.props
        return tabs.map((tab, i) => {
            return (
              <Tab
                key={ i }
                active={ match.params.name === tab.link ? true : false }
              >
                <Link to={ `${match.url}/${tab.link}` }>
                  { tab.title }
                </Link>
              </Tab>
            )
        })
    }
    renderPane = (props) => {
        const { tabs } = this.props
        const { match, history } = props
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].link === match.params.tab) {
                return tabs[i].element
            }
        }
        history.push(tabs[0].link)
        return tabs[0].element
    }
    fromTop = () => {
        const { location, tabs } = this.props
        const loc = location.pathname.split('/')[location.pathname.split('/').length - 1]
        for (let i = 0; i < tabs.length; i++) {
            if (loc === tabs[i].link) {
                return true
            }
        }
        return false
    }
    render() {
        const { activeTab } = this.state
        const { match, tabs, location } = this.props
        console.log(location);
        return (
            <Container>
              { !this.fromTop() && <Redirect from={ `gene/${match.params.id}` } exact to={ `${match.url}/${tabs[0].link}` } />}
              <TabBar>
                { this.renderTabs() }
              </TabBar>
              <Content>
                <Route path={ `${match.url}/:tab` } component={ this.renderPane } />
              </Content>
            </Container>
        )
    }
}
