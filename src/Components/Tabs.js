import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lighten } from 'polished'
import { Link as RouterLink, Route, Redirect, Switch } from 'react-router-dom'
import Pane from './Pane'

const Container = styled.div`
  padding: 20px;
  margin-top: 10px;
  position: relative;

  @media (max-width: 917px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px 0px 0px 0px;
      margin-top: 10px;
  }
`
const TabBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  top: 20px;
  height: 50px;
  overflow-x: scroll;

  @media (max-width: 917px) {
    height: auto;
    position: initial;
    display: flex;
    max-width: 100%;
    ${''/* border-top: 1px solid black; */}
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      ${''/* width: 0 !important; */}
      display: none;
    }
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

  @media (max-width: 917px) {
    position: relative;
    height: 45px;
  }
`
const RightArrow = styled.div`
  width: 25px;
  height: 45px;
  display: none;
  position: absolute;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: ${ props => props.visible ? 1 : 0 };
  transition: opacity 0.25s ease;
  pointer-events: none;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid white;
    z-index: 2;
  }

  @media (max-width: 917px) {
    display: block;
  }
`
const LeftArrow = styled.div`
  width: 25px;
  height: 45px;
  display: none;
  position: absolute;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: ${ props => props.visible ? 1 : 0 };
  transition: opacity 0.25s ease;
  pointer-events: none;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 7px solid white;
    z-index: 2;
  }

  @media (max-width: 917px) {
    display: block;
  }
`
const Link = styled(RouterLink)`
  height: 100%;
  width: 100%;
  display: flex;
  padding: ${ props => props.active ? '10px 20px' : '10px 15px' };
  transition: all 0.17s ease;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;

  @media (max-width: 917px) {
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

  @media (max-width: 917px) {
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
    tabs: Array<Object>
}
type State = {
    scrollPos: ?string
}
export default class Tabs extends Component {
    constructor() {
        super()
        this.state = {
            scrollPos: 'left'
        }
    }
    componentDidMount() {
        this.tabBar.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
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
    handleScroll = (e) => {
        const { scrollPos } = this.state
        const max = this.tabBar.scrollWidth - this.tabBar.clientWidth
        if (this.tabBar.scrollLeft < 15 && scrollPos != 'left') {
            this.setState({
                scrollPos: 'left'
            })
        } else if (this.tabBar.scrollLeft > max - 15 && scrollPos != 'right') {
            this.setState({
                scrollPos: 'right'
            })
        } else if (this.tabBar.scrollLeft > 15 && this.tabBar.scrollLeft < max - 15) {
            this.setState({
                scrollPos: 'middle'
            })
        }
    }
    handleResize = (e) => {
        const { scrollPos } = this.state
        if (this.tabBar.scrollWidth <= this.tabBar.clientWidth && scrollPos != 'none') {
            console.log('kek');
            this.setState({
                scrollPos: 'none'
            })
        } else if (scrollPos != 'none') {
            this.handleScroll()
        }
    }
    componentWillUnmount() {
        this.tabBar.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    }
    render() {
        const { match, tabs, location } = this.props
        let { scrollPos } = this.state
        return (
            <ThemeProvider theme={ theme }>
              <Container>
                { !this.fromTop() && <Redirect to={ `${match.url}/${tabs[0].link}` } /> }
                <TabBar innerRef={ el => this.tabBar = el }>
                  <LeftArrow visible={ scrollPos != 'left' && scrollPos != 'none' ? true : false } pos="left" />
                  { this.renderTabs() }
                  <RightArrow visible={ scrollPos != 'right' && scrollPos != 'none' ? true : false } pos="right" />
                </TabBar>
                <Content innerRef={ el => this.content = el }>
                  <Route path={ `${match.url}/:tab` } component={ (props) => <Pane { ...props } tabs={ tabs } /> } />
                </Content>
              </Container>
            </ThemeProvider>
        )
    }
}
