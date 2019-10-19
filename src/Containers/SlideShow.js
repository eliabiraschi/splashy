/**
 * The SlideShow component create an overlay on top of its parent component and display
 * the pictures passed with the list prop. It closes on ESC press too!
 */
import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Image,
  LinkButton,
  Icon,
} from '../Components/UI'
import { PicturePropTypes } from '../Components/Picture'
import { Context } from '../Context'
import { TOGGLE_SLIDESHOW } from '../Reducers/actions'

const SlideShow = ({list, timeInterval}) => {
  const { state, dispatch } = useContext(Context)
  const [ currentPicIndex, setCurrentPicIndex ] = useState(0)
  
  const handleEscKey = (event) => {
    if(event.keyCode === 27) {
      dispatch({ type: TOGGLE_SLIDESHOW, selectedPic: null })
    }
  }

  console.log(state.singlePictureFullscreen)
  if (state.singlePictureFullscreen) {
    list = [state.singlePictureFullscreen]
  }
  
  useEffect(() => {
    if (list.length === 0) {
      dispatch({ type: TOGGLE_SLIDESHOW })
    } else {
      document.addEventListener('keydown', handleEscKey, false);
      let interval;
      if (list.length > 1) {
        interval = setInterval(() => {
          const next = currentPicIndex === list.length - 1 ? 0 : currentPicIndex + 1
          setCurrentPicIndex(next)
        }, timeInterval)
      }
      return () => {
        clearInterval(interval)
        document.removeEventListener('keydown', handleEscKey, false);
      }
    }
  });

  return (list.length > 0 &&
    <Box
      p="3rem"
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: '99',
        backgroundColor: 'black'
      }}
    >
      <LinkButton
        onClick={() => {
          dispatch({ type: TOGGLE_SLIDESHOW, selectedPic: null })
        }}
        style={{
          zIndex: '101'
        }}
        title="close"
      >
        <Icon
          color="accent"
          name="compress"
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2.2rem',
            fontSize: '1.5rem',
          }}
        />
      </LinkButton>
      <Image
        src={list[currentPicIndex].urls.full}
        alt={list[currentPicIndex].alt_description}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          zIndex: '100'
        }}
      />
    </Box>
  )
}

SlideShow.propTypes = {
  list: PropTypes.arrayOf(PicturePropTypes),
  timeInterval: PropTypes.number,
}

SlideShow.defaultProps = {
  list: [],
  timeInterval: 2500,
}

export default SlideShow
