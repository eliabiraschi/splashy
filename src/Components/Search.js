/**
 * Search field with button. It does nothing by itself, the real search has to be done
 * elsewhere
 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Icon,
  LinkButton,
  Input,
} from './UI'

const Search = ({ defaultValue, onChange, onSearch }) => {
  const [ value, setValue ] = useState(defaultValue)
  return(
    <Box
      p="0.6rem"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Input
        type="text"
        placeholder="search"
        py="0.3rem"
        px="1rem"
        mr="0.5rem"
        width="24rem"
        bg="black"
        color="accent"
        value={value}
        onChange={ event => {
          setValue(event.target.value)
          onChange(event)
        }}
        onKeyDown={(event)=>{
          if (event.key === 'Enter') {
            onSearch(value)
          }
        }}
      />
      <LinkButton
        onClick={() => onSearch(value)}
      >
        <Icon name="search" color="accent" style={{ fontSize: '1.6rem' }} />
      </LinkButton>
    </Box>
  )
}

Search.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
}

Search.defaultProps = {
  defaultValue: '',
  onChange: () => {},
  onSearch: () => {},
}

export default Search
