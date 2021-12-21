import { createStore } from "@reduxjs/toolkit"
import reducers from "./reducers/main"

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
