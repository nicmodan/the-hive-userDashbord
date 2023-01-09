import thehivecatlogreducer from "./reducer/thehivecatlogreducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      user: thehivecatlogreducer
    }
})

export default store
