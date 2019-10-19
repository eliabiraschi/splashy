/**
 * The Favs is basically a light version of the Home, where the data is not collected from
 * the API, not the global store, but from the local storage
 */
import React, { useState, useContext } from 'react'
import { getFavs } from '../../Services/Favs'
import { Context } from '../../Context'
import Pictures from '../Pictures'
import SlideShow from '../SlideShow'

const Favs = () => {
  const [ pictures, setPictures ] = useState(getFavs())
  const { state } = useContext(Context)
  return(
    state.slideShow
    ? (<SlideShow list={pictures} />)
    : (<Pictures
      list={pictures}
      onChange={() => {
        setPictures(getFavs())
      }}
    />)
  )
}

export default Favs
