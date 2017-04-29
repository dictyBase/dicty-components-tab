import React, { Component } from 'react'
import styled from 'styled-components'

type Props = {
    active: boolean
}
export default class Pane extends Component {
    render() {
        return <div style={ {background: 'steelblue', height: 200} } />
    }
}
