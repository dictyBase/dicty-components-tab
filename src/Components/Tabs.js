import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lighten } from 'polished'
import { Link as RouterLink, Route, Redirect, Switch } from 'react-router-dom'
import Pane from './Pane'
import findWithProp from '../Utils/findWithProp'

const Container = styled.div`
  padding: 20px;
  margin-top: 10px;
  position: relative;

  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      margin-top: 0px;
  }
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
  overflow-x: scroll;

  @media (max-width: 768px) {
      position: initial;
      display: flex;
      max-width: 100%;
  }
`
const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  background: ${
    props => {
        return props.active ?
        props.theme.primary ? props.theme.primary : '#15317e'
        : props.theme.secondary ? props.theme.secondary : '#A3BAE9'
    }
  };
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  height: ${ props => props.active ? '45px' : '35px'};
  margin-right: 3px;
  margin-top: 1px;
  transition: all 0.17s ease;

  &:hover {
    background: ${ props => !props.active && props.theme.secondary ? lighten(0.1, props.theme.secondary) : '#15317e' };
  }

  @media (max-width: 768px) {
    margin-right: 0px;
    border-left: none;
    height: 45px;
  }
`
const Link = styled(RouterLink)`
  height: 100%;
  width: 100%;
  display: flex;
  padding: ${ props => props.active ? '10px 20px' : '10px 15px' };
  /*padding: 10px 20px;*/
  transition: all 0.17s ease;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`
const Text = styled.p`
  display: block;
  color: ${
    props => props.active
      ? props.theme.tabText ? props.theme.tabText : 'white'
      : props.theme.secondaryTabText ? props.theme.secondaryTabText : 'black'
  };
`
const Content = styled.div`
  position: relative;
  border: 1px solid black;
  transition: height 0.3s ease;
  height: auto;
  padding: 20px;
  margin-top: 50px;
  transition: height 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 0px;
    border-width: 1px 0px;
  }
`

const theme = {
    primary: '#15317e',
    secondary: '#A3BAE9',
    tabText: 'white'
}

type Props = {

}
type State = {
    activeTab: ?string
}
export default class Tabs extends Component {
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
                  <Text active={ active }>
                    { tab.title }
                  </Text>
                </Link>
              </Tab>
            )
        })
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
                { !this.fromTop() && <Redirect to={ `${match.url}/${tabs[0].link}` } /> }
                <TabBar>
                  { this.renderTabs() }
                </TabBar>
                <Content innerRef={ el => this.content = el }>
                  <Route path={ `${match.url}/:tab` } component={ (props) => <Pane { ...props } tabs={ tabs } /> } />
                </Content>
              </Container>
            </ThemeProvider>
        )
    }
}
