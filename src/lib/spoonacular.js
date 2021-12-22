import {useState, useEffect} from "react"
import axios from "axios"

const API_BASE_URL = 'https://api.spoonacular.com/mealplanner/generate?'
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY

