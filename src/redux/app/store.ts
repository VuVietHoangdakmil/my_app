import { combineReducers, configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../fetures/login/loginSilce'
import deviceReducer from '../fetures/device/diviceSlice'
const reducers = combineReducers({
  LoginReducer ,
  deviceReducer
})

const store = configureStore({

  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      },
    }),
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

