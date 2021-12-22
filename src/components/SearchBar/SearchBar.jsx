import React, { useEffect, useState } from "react"
import "./SearchBar.css"

import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"

export default function SearchBar({ placeholder, exercises, handleTargetExercise }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = ev => {
    const searchWord = ev.target.value
    setWordEntered(searchWord)
    const newFilter = exercises.filter(exercise => {
      return (
        exercise.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        Object.values(exercise.muscle_group).some(muscle =>
          muscle.toLowerCase().includes(searchWord.toLowerCase())
        )
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

  function handleDataResult(ev) {
    ev.preventDefault()
    const currentId = parseInt(ev.currentTarget.dataset.value)
    const targetExercise = exercises.find(ex => ex.id === currentId)
    handleTargetExercise(targetExercise)
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
          {filteredData.slice(0, 15).map(value => {
            return (
              <div
                className="dataItem"
                data-value={value.id}
                key={value.id}
                onClick={handleDataResult}
              >
                <p>{value.name}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
