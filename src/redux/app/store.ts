import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../fetures/login/loginSilce";
import deviceReducer from "../fetures/device/diviceSlice";
import serviceReducer from "../fetures/servicess/servicesSlice";
import serviceDetailReducer from "../fetures/servicess/serviesDetailSlice";
const reducers = combineReducers({
  LoginReducer,
  deviceReducer,
  serviceReducer,
  serviceDetailReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
