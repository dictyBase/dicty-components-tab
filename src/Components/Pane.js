import React, { Component } from 'react'
import styled from 'styled-components'

export default class Pane extends Component {
    componentWillMount()  {
        const { match, tabs, history } = this.props
        console.log(match, tabs, history)
    }
    render() {
        const { tabs } = this.props
        const { match, history } = this.props
        console.log(tabs, match, history)
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].link === match.params.tab) {
                return tabs[i].element
            }
        }
        history.push(tabs[0].link)
        return tabs[0].element
    }
}
