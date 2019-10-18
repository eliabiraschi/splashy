import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'

import { getLatest/* , searchByKeywords */ } from '../../Services/Unsplash'
import { UPDATE_PICTURES } from '../../Reducers/actions'

import {
  Container,
  Box,
  Image,
} from '../../Components/UI'

const Home = () => {
  const { state, dispatch } = useContext(Context);
  console.log(state.pictures)
  useEffect(() => {
    getLatest() //searchByKeywords('ferret')
      .then(data => dispatch({ type: UPDATE_PICTURES, data }))
  }, [dispatch])
  return (
    <Container>
      {
        state.pictures.map(({ id, urls, alt_description }) => (
          <Box key={id} p="1rem">
            <Image m="1rem" src={urls.regular} alt={alt_description} />
          </Box>
        ))
      }
    </Container>
)}

export default Home
