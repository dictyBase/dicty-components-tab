import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lighten } from 'polished'
import { Link as RouterLink, Route, Redirect, Switch } from 'react-router-dom'
// import Pane from './Pane'
import findWithProp from '../Utils/findWithProp'

const Container = styled.div`
  padding: 20px;
  margin-top: 10px;
  position: relative;
`
const TabBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  ${''/* justify-content:  */}
  top: 20px;
  height: 50px;
`
const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${''/* transform: ${ props => props.active ? 'scaleY(1.2)' : 'scaleY(1)' }; */}
  cursor: pointer;
  background: ${ props => props.active ? props.theme.primary : props.theme.secondary };
  ${''/* box-shadow: ${ props => props.active ? '0px -3px 17px 0px rgba(50, 50, 50, 0.75)' : 'none' }; */}
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  ${''/* width: ${ props => props.active ? '110px' : '100px'}; */}
  height: ${ props => props.active ? '50px' : '40px'};
  margin-right: 2px;
  margin-top: 1px;
  transition: all 0.17s ease;

  &:hover {
      ${ props => props.theme.active && `background${ props => props.theme.primary}` }
  }
`
const Link = styled(RouterLink)`
  height: 100%;
  width: 100%;
  display: flex;
  padding: ${ props => props.active ? '0px 20px' : '0px 10px' };
  transition: all 0.17s ease;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
`
const Text = styled.p`
  display: block;
  color: ${ props => props.theme.tabText };
`
const Content = styled.div`
  position: relative;
  border: 1px solid black;
  transition: height 0.3s ease;
  height: auto;
  padding: 20px;
  margin-top: 50px;
  transition: height 0.3s ease;
`

const theme = {
    primary: '#15317e',
    secondary: lighten(0.4, '#15317e'),
    tabText: 'white'
}

type Props = {

}
type State = {
    activeTab: ?string
}
export default class Tabs extends Component {
    constructor() {
        super()
    }
    renderTabs = () => {
        const { tabs, match } = this.props
        const { pathname } = this.props.location
        const loc = pathname.split('/')[pathname.split('/').length - 1]
        return tabs.map((tab, i) => {
            const active = loc === tab.link ? true : false
            return (
              <Tab
                key={ i }
                active={ active }
              >
                <Link to={ `${match.url}/${tab.link}` } active={ active }>
                  <Text>
                    { tab.title }
                  </Text>
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
        const { match, tabs, location } = this.props
        return (
            <ThemeProvider theme={ theme }>
              <Container>
                { !this.fromTop() && <Redirect from={ `gene/${match.params.id}` } exact to={ `${match.url}/${tabs[0].link}` } />}
                <TabBar>
                  { this.renderTabs() }
                </TabBar>
                <Content>
                  <Route path={ `${match.url}/:tab` } component={ this.renderPane } />
                </Content>
              </Container>
            </ThemeProvider>
        )
    }
}
