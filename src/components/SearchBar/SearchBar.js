import React, { useState } from "react"
import "./SearchBar.css"

import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"

export default function SearchBar({ placeholder, exercises }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = ev => {
    const searchWord = ev.target.value
    setWordEntered(searchWord)
    const newFilter = exercises.filter(exercise => {
      return (
        exercise.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        exercise.muscle_group.toLowerCase().includes(searchWord.toLowerCase())
      )
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered("")
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataItem" key={value.id}>
                <p>{value.name}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
