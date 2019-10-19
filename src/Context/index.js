import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import reducer from '../Reducers'

const initialState = {
  pictures: [],
  theme: 'light',
  slideShow: false,
  singlePictureFullscreen: null,
}
/**
 * The Context will be included from the components that will need to access the context
 */
const Context = React.createContext(initialState)

/**
 * ContextProvider will take care of initializing the store and to make it available to
 * the rest of the components
 */
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
