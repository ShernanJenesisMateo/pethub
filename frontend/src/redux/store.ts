import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import petSaga from './saga/petSaga';
import petReducer from './state/petState';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    pets : petReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(petSaga);

export type RootState = ReturnType<typeof store.getState>;