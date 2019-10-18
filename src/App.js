import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { ContextProvider } from './Context'
import theme from './Styles/light'

import { Page } from './Components/UI'
import Navbar from './Containers/Navbar'
import Home from './Containers/Pages/Home'
import Favs from './Containers/Pages/Favs'

const App = () =>(
  <Router>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Page color="navy" bg="white">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/favs' component={Favs} />
          </Switch>
        </Page>
      </ThemeProvider>
    </ContextProvider>
  </Router>
)

export default App
