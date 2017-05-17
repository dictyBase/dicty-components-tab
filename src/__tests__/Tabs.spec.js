import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter, Route, Link } from 'react-router-dom'
import { shallow, mount } from 'enzyme'
import Tabs from '../Components/Tabs'

const tabs = [
    {
        title: 'Blast',
        element: (
            <div>
            </div>
        ),
        link: 'blast'
    },
    {
        title: 'Protein',
        element: (
            <div style={ {height: 100, background: 'blue'} }></div>
        ),
        link: 'protein'
    },
    {
        title: 'Kek',
        element: (
            <div style={ {height: 100, background: 'green'} }></div>
        ),
        link: 'kek'
    },
    {
        title: 'Test',
        element: (
            <div style={ {height: 100, background: 'goldenrod'} }></div>
        ),
        link: 'test'
    }
]

const Routes = (props) => {
    return (
        <MemoryRouter initialEntries={ ['/'] } initialIndex={ 0 }>
            <Route path='/' component={ props => { return <Tabs { ...props } tabs={ tabs }/> } } />
        </MemoryRouter>
    )
}
describe('Tabs', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<Routes />)
    })
    it('should render without crashing', () => {
        const div = document.createElement('div')
        const el = <Routes />
        ReactDOM.render(el, div)
    })
    it('should redirect to the first tab if it is accessed from its base path', () => {
        expect(wrapper.find(Tabs).props().location.pathname.includes(tabs[0].link)).toBe(true)
    })
    it('should push a new route when a tab is clicked', () => {
        // Include { button: 0 } or react-router Link will not be clicked
        wrapper.find(Link).at(1).simulate('click', { button: 0 })
        expect(wrapper.find(Tabs).prop('location').pathname.includes(tabs[1].link)).toBe(true)
    })
})
