import userReducer from "./Service/user-Store"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
   reducer: {
     user: userReducer
   }
})

export default store