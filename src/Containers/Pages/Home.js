/**
 * Home component, beside displaying the search and the pictures, takes care of
 * handling the fetching of the pictures in the first place and on every search.
 */
import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import { getLatest, searchByKeywords } from '../../Services/Unsplash'
import { UPDATE_PICTURES } from '../../Reducers/actions'
import Search from '../../Components/Search'
import Pictures from '../Pictures'
import SlideShow from '../SlideShow'

const Home = () => {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    getLatest()
      .then(data => dispatch({ type: UPDATE_PICTURES, data }))
  }, [dispatch])
  return (
    state.slideShow ? (<SlideShow list={state.pictures} />)
    : [
    <Search
      key="searchBox"
      onSearch={(searchQuery)=>{
        if(searchQuery.length > 0) {
          searchByKeywords(searchQuery)
            .then(data => dispatch({ type: UPDATE_PICTURES, data }))
        }
      }}
    />,
    <Pictures
      key="pictureslist"
      list={state.pictures}
      ifEmpty="Loading, but if it never loads I'd check my internet connection"
    />
])}

export default Home
