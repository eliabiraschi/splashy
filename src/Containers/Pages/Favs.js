/**
 * The Favs is basically a light version of the Home, where the data is not collected from
 * the API, not the global store, but from the local storage
 */
import React, { useState, useContext } from 'react'
import { getFavs } from '../../Services/Favs'
import { Context } from '../../Context'
import { Text } from '../../Components/UI'
import Pictures from '../Pictures'
import SlideShow from '../SlideShow'

const Favs = () => {
  const [ pictures, setPictures ] = useState(getFavs())
  const { state } = useContext(Context)
  return(
    state.slideShow
    ? (<SlideShow list={pictures} />)
    : ([
      <Text
        key="title"
        color="accent"
        m="2.2rem"
        style={{
          fontSize: '2.2rem',
          fontWeight: 'bold',
        }}
      >Favourites</Text>,
      <Pictures
        key="picturescontainer"
        list={pictures}
        ifEmpty="You have no favourites - Go and search for some!"
        onChange={() => {
          setPictures(getFavs())
        }}
      />
    ])
  )
}

export default Favs
