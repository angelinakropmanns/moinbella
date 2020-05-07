import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Filter.propTypes = {
  setSearchResult: PropTypes.func,
}

export default function Filter({ setSearchResult }) {
  return (
    <FilterStyled>
      <InputStyled
        type="search"
        onChange={(event) => handleChange(event)}
        placeholder="Suche nach Name oder PLZ"
      />
    </FilterStyled>
  )
  function handleChange(event) {
    setSearchResult(event.target.value)
  }
}

const FilterStyled = styled.form`
  display: flex;
  justify-content: right;
  margin-top: 16px;
  margin-right: 4px;
`

const InputStyled = styled.input`
  width: 164px;
  height: 28px;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 100;
  border-radius: 4px;
  border: 0.5px solid #414756;
  background-color: #d3e7ea;
  color: #353b40;
  padding: 4px;
`
