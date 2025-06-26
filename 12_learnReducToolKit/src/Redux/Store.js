import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

/*
    step:1 => create store
    step:2 => wrap app component under provider
    step:3 => create slice
    step:4 => register reducer in store
*/