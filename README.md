# Tab Component
A responsive, themable tab component integrated with [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

## Demo

```bash
npm run demo
```

## Desktop

<img src="https://zippy.gfycat.com/OblongGoldenFlea.gif" />

## Mobile

## Usage

The `Tabs` component accepts an array of objects which it uses to generate the tabs, routes, and content. Below is an example setup that includes the JSON structure:

```jsx
    import { BrowserRouter as Router, Route } from 'react-router-dom'
    import { Tabs } from 'dicty-components-tab'

    const tabs = [
        {
            title: 'Blast',
            element: (
                <div>
                  <p>Content goes here</p>
                </div>
            ),
            link: 'blast'
        },
        {
            title: 'Protein',
            element: (
                <div style={ {height: 100, background: 'blue'} }>Content goes here</div>
            ),
            link: 'protein'
        }
    ]

    const Home = () => <div>Home</div>

    const Routes = () => {
        return (
            <Router>
              <div>
                <Route exact path="/" component={ () => <Home /> } />
                {/* You must pass props from the Route to the Tabs component */}
                <Route path="/gene/:id" component={ props => <Tabs { ...props } tabs={ tabs } /> } />
              </div>
            </Router>
        )
    }
```
 Internally, the `Tabs` component attempts to match the subroute (in this example, something like "/gene/:id/blast") to the `link` property of one of the provided tab objects. If it fails to match the subroute to any of the provided tabs, it defaults to the first tab. If the tab is accessed from its top-level route, it also defaults to the first tab.

## Props

| Property | Type          | Purpose                                                                                                                              |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| tabs     | Array<Object> | An array of objects of the form {title: string, element: ReactElement, link: string} used to configure the tabs, routes and content. |
| match    | Object        | Passed in via react-router-dom (see example)                                                                                         |
| history  | Object        | Passed in via react-router-dom (see example)                                                                                         |
| location | Object        | Passed in via react-router-dom (see example)                                                                                         |
