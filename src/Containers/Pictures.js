/**
 * Container component for the picture for consistent display between the different pages
 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  addToFavs,
  getFavsIdsOnly,
  removeFromFavsById,
} from '../Services/Favs'
import {
  Container,
  Text,
} from '../Components/UI'
import Picture, { PicturePropTypes } from '../Components/Picture'

const Pictures = ({ list, onChange, ifEmpty }) => {
  const [ favsIds, setFavsIds ] = useState(getFavsIdsOnly())
  return (
    <Container>
      {
        list.length > 0
        ? list.map(data => (
          <Picture
            key={data.id}
            data={data}
            isFav={favsIds.includes(data.id)}
            onHeartClick={()=>{
              favsIds.includes(data.id)
                ? removeFromFavsById(data.id)
                : addToFavs(data)
              setFavsIds(getFavsIdsOnly())
              onChange()
            }}
          />
        ))
      : (<Text
          color="accent"
          mt="5rem"
        >
          {ifEmpty}
        </Text>
      )}
    </Container>
  )
}

Picture.propTypes = {
  list: PropTypes.arrayOf(PicturePropTypes),
  onChange: PropTypes.func,
  ifEmpty: PropTypes.string,
}

Pictures.defaultProps = {
  list: [],
  onChange: () => {},
  ifEmpty: 'There are no pictures here.',
}

export default Pictures
