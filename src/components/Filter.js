import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components/macro'
import filterData from '../filterData.json'

Filter.propTypes = {
  setSearchResult: PropTypes.func.isRequired,
}

export default function Filter({ setSearchResult }) {
  return (
    <FilterStyled>
      <Autocomplete
        options={filterData.map((option) => option.plz)}
        renderInput={(params) => (
          <TextField
            {...params}
            className="textfield"
            InputProps={{ ...params.InputProps, type: 'text' }}
            placeholder="Suche nach PLZ"
            onSelect={(event) => setSearchResult(event.target.value)}
          />
        )}
      />
    </FilterStyled>
  )
}

const FilterStyled = styled.form`
  display: flex;
  justify-content: left;
  margin: 16px 4px 0 4px;
  .textfield {
    width: 200px;
    height: 28px;
    color: #353b40;
    font-size: 12px;
  }
`
