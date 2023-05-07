import { configureStore } from '@reduxjs/toolkit'
import createNameReducer from '../features/CreateMusic/CreateMusicSlice'
import itemsReducer from "../features/Data/DataSlice"
import createSagaMiddleware from 'redux-saga'
import musicSaga from '../features/saga/musicSaga'

const saga = createSagaMiddleware()

 const store = configureStore({
  reducer: {
    music: createNameReducer,
    items: itemsReducer,
  },
  middleware: [saga],
})

saga.run(musicSaga);

export default store