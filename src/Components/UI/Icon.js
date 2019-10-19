/**
 * The icons are from Fontawesome and only those used have been mapped
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, space, layout, } from 'styled-system'

const iconsMap = {
  heart: 'fas fa-heart',
  heartAlt: 'far fa-heart',
  home: 'fas fa-home',
  moon: 'fas fa-moon',
  sun: 'fas fa-sun',
  search: 'fas fa-search',
  compress: 'fas fa-compress',
  play: 'fas fa-play-circle'
}

const StyledI = styled.i`
  ${color}
  ${space}
  ${layout}
`

const Icon = ({ name, ...rest }) => (
  <StyledI key={iconsMap[name]} {...rest} >
    <span className={iconsMap[name]} />
  </StyledI>
)

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconsMap))
}

export default Icon
