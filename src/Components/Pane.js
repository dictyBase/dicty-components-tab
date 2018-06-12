// @flow
import React, { Component } from "react"
import styled from "styled-components"

type Props = {
  tabs: Array<Object>,
  match: Object,
  history: Object,
}

export default class Pane extends Component<Props> {
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
