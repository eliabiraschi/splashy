import React, { useContext } from 'react'
import Context from '../../Context'

import {
  Container,
  Box,
  Image,
} from '../../Components/UI'

const Home = () => {
  const { pictures } = useContext(Context);
  console.log(pictures)
  return (
  <Container>
    {
      pictures.map(({id, urls, alt_description }) => (
        <Box key={id} p="1rem">
          <Image m="1rem" src={urls.regular} alt={alt_description} />
        </Box>
      ))
    }
  </Container>
)}

export default Home
