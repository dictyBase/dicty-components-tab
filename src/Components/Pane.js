import React, { Component } from 'react'
import styled from 'styled-components'

export default class Pane extends Component {
  render() {
      const { tabs, match, history } = this.props
      for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].link === match.params.tab) {
              return tabs[i].element
          }
      }
      history.push(tabs[0].link)
      return tabs[0].element
  }
}
