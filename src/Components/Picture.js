/**
 * Template for the pictures
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Image,
  LinkButton,
  Icon,
} from './UI'

const Picture = ({ data, onHeartClick, isFav }) => {
  const iconClass = isFav ? 'heart' : 'heartAlt'
  const toolTipText = isFav ? 'remove from favs' : 'add to favs'
  return (
    <Box m="1rem">
      <Image src={data.urls.regular} alt={data.alt_description} />
      <LinkButton
        m="0.5rem"
        onClick={onHeartClick}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      >
        <Icon title={toolTipText} name={iconClass} color="accent" style={{ fontSize: '1.6rem' }} />
      </LinkButton>
    </Box>
  )
}

// these are the fields currently used accross the app - check the readme.md for the full data model
export const PicturePropTypes = PropTypes.shape({
  id: PropTypes.string,
  urls: PropTypes.shape({
    regular: PropTypes.string,
    full: PropTypes.string,
  }),
  alt_description: PropTypes.string,
})

Picture.propTypes = {
  data: PicturePropTypes,
  isFav: PropTypes.bool,
  onHeartClick: PropTypes.func,
}

Picture.defaultProps = {
  data: {},
  isFav: false,
  onHeartClick: () => {},
}

export default Picture
