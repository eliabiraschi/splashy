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
} from '../Components/UI'
import Picture, { PicturePropTypes } from '../Components/Picture'

const Pictures = ({ list, onChange }) => {
  const [ favsIds, setFavsIds ] = useState(getFavsIdsOnly())
  return (
    <Container>
      {
        list.map(data => (
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
      }
    </Container>
  )
}

Picture.propTypes = {
  list: PropTypes.arrayOf(PicturePropTypes),
  onChange: PropTypes.func,
}

Pictures.defaultProps = {
  list: [],
  onChange: () => {},
}

export default Pictures
