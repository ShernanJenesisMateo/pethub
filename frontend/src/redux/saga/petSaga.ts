import { call, put, takeEvery } from 'redux-saga/effects';
import { getPetsSuccess } from '../state/petState';
import axios from "axios";

function* workGetPetsFetch(): Generator<any, void, any> { 
  try {
    const pets = yield call(() => axios.get("http://localhost:8080/pet/all").then((res) => res.data));
    yield put(getPetsSuccess(pets));
  } catch (error) {
    console.log("This is the error ----- " + error)
  }
}

function* petSaga(): Generator {
  yield takeEvery('pet/getPetsFetch', workGetPetsFetch);
}

export default petSaga;