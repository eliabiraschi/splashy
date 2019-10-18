import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getLatest, searchByKeywords } from '../Services/Unsplash'

import Context from './index'

const AppContext = ({ children }) => {
  const [pictures, setPictures] = useState([])
  useEffect(()=>{
    /* getLatest() */searchByKeywords('ferret')
      .then(setPictures)
  },[])
  return (
    <Context.Provider
      value={{
        pictures
      }}
    >
      {children}
    </Context.Provider>
  )
}

AppContext.propTypes = {
  children: PropTypes.node
}

export default AppContext
