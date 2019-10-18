import React from 'react'
import {
  withRouter,
  Link,
} from 'react-router-dom';

import {
  //Container,
  Box,
  // Image,
} from '../Components/UI'

const Navbar = withRouter(({ location }) => {
  const isHome = location.pathname === '/'
  return (
  <Box bg="navy" color="white">
    <h1>Splashy <small>{ isHome ? 'all' : 'favs' }</small></h1>
    <button>dark mode</button>
    <Link to={isHome ? '/favs' : '/'}>{ isHome ? 'favs' : 'all' }</Link>
  </Box>
)})

export default Navbar
