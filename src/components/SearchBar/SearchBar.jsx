import React, { useEffect, useState } from "react"
import "./SearchBar.css"

import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"
import { current } from "@reduxjs/toolkit"

const STORAGE_KEY_PREFIX = "WORKOUT_LIST_WITH_LOCAL_STORAGE"
const STORAGE_KEY = `${STORAGE_KEY_PREFIX}-workoutList`

export default function SearchBar({ placeholder, exercises }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")
  const [result, setResult] = useState([])

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

  // function useStateWithLocalStorage(localStorageKey = STORAGE_KEY) {
  //   const [value, setValue] = useState(
  //     localStorage.getItem(localStorageKey) || ""
  //   )

  //   useEffect(() => {
  //     localStorage.setItem(localStorageKey, value)
  //   }, [value])

  //   return [value, setValue]
  // }

  function handleDataResult(ev) {
    ev.preventDefault()
    const currentId = parseInt(ev.currentTarget.dataset.value)
    console.log("currentId", currentId)

    const targetExercise = exercises.filter(ex => ex.id === currentId)
    console.log(targetExercise)
    setResult(targetExercise)
    localStorage.setItem(targetExercise)

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
