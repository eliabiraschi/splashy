/**
 * Displays the navbar on top of the page. It can be included in the page layout
 * or be indipendent on top fo the router-switch
 */

import React, { useContext } from 'react'
import {
  withRouter,
  Link,
} from 'react-router-dom';

import { Context } from '../Context'

import {
  TOGGLE_THEME,
  TOGGLE_SLIDESHOW,
} from '../Reducers/actions'

import {
  Box,
  LinkButton,
  Icon,
  Text,
} from '../Components/UI'

const Navbar = withRouter(({ location, history }) => {
  const { state, dispatch } = useContext(Context)
  const isHome = location.pathname === '/'
  const theme = state.theme === 'light' ? 'dark' : 'light'
  const themeIcon = state.theme === 'light' ? 'moon' : 'sun'
  const pageIcon = isHome ? 'heart' : 'search'
  return !state.slideShow ? (
    <Box
      bg="primary"
      color="white"
      p="1.2rem"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Box>
        <LinkButton
          color="accent"
          onClick={() => {
            if (!isHome) {
              history.push('/')
            }
          }}
        >
          <h1>Splashy</h1>
        </LinkButton>
        <Text color="accent" ml="0.3rem">discover new pictures</Text>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <LinkButton
          mr="2rem"
          onClick={()=>{
            dispatch({ type: TOGGLE_SLIDESHOW, selectedPic: null })
          }}
          title="Start slide show"
        >
          <Icon name="play" color="accent" style={{ fontSize: '1.6rem' }} />
        </LinkButton>
        <Link
          to={isHome ? '/favs' : '/'}
          style={{
            marginRight: '2rem',
          }}
          title={isHome ? 'Favourites' : 'Discover'}
        >
          <Icon name={pageIcon} color="accent" style={{ fontSize: '1.6rem' }} />
        </Link>
        <LinkButton
          onClick={()=>{
            dispatch({ type: TOGGLE_THEME, theme })
          }}
          title="toggle theme"
        >
          <Icon name={themeIcon} color="accent" style={{ fontSize: '1.6rem' }} />
        </LinkButton>
      </Box>
    </Box>
  ): null})

export default Navbar
