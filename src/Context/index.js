import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import reducer from '../Reducers'

const initialState = { pictures: [] }

const Context = React.createContext(initialState)

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node
}

export { ContextProvider, Context }
