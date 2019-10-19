/**
 * The App component glues together all the pieces of the app in the right order
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ContextProvider} from './Context'

import Theme from './Containers/Theme'
import Navbar from './Containers/Navbar'
import Home from './Containers/Pages/Home'
import Favs from './Containers/Pages/Favs'
import ErrorBoundaries from './Components/ErrorBoundaries'

import { Page } from './Components/UI'

const App = () => (
  <Router>
    <ContextProvider>
      <Theme>
        <Page color="black" bg="white">
          <ErrorBoundaries>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/favs' component={Favs} />
            </Switch>
          </ErrorBoundaries>
        </Page>
      </Theme>
    </ContextProvider>
  </Router>
)

export default App
