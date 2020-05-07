import React from 'react'

export default function Filter({ setSearchResult }) {
  return (
    <form>
      <input type="search" onChange={(event) => handleChange(event)} />
    </form>
  )
  function handleChange(event) {
    setSearchResult(event.target.value)
  }
}
