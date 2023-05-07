import { call, put, takeEvery ,takeLatest} from 'redux-saga/effects';
import {db} from "../../firebase-config"
import { collection,getDocs,addDoc,doc, deleteDoc,updateDoc } from "firebase/firestore"
import {
  addItemSuccess,
  addItemFail,
  removeItemSuccess,
  removeItemFail,
  updateItemSuccess,
  updateItemFail,
  getMusicSuccess,
  getMusicFail,
} from '../Data/DataSlice';

const musicRef = collection(db, 'musics');
function* workGetMusicFetch() {
  try {
    const musicSnapshot = yield call(() => getDocs(musicRef));
    const musicList = musicSnapshot.docs.map((doc) => ({...doc.data(),id: doc.id}));
    yield put(getMusicSuccess(musicList));
  } catch (error) {
    yield put(getMusicFail(error.message));
  }
}

function* workAddItem(action) {
  try {
    const newItem = action.payload;
    const addedItemRef = yield call(() => addDoc(musicRef, newItem));
    const addedItemSnapshot = yield call(() => getDocs(addedItemRef));
    const addedItem = { id: addedItemSnapshot.id, ...addedItemSnapshot.data() };
    yield put(addItemSuccess(addedItem));
  } catch (error) {
    yield put(addItemFail(error.message));
  } 
}

function* workRemoveItem(action) {
  try {
    const id = action.payload;
    const docRef = doc(db, 'musics', id);
    yield call(deleteDoc, docRef);
    yield put(removeItemSuccess(id));
  } catch (error) {
    yield put(removeItemFail(error.message));
  }
}
function* workUpdateItem(action) {
  try {
    const { id } = action.payload
    const updatedItem = action.payload;
    const musicRef = doc(db, 'musics', id);
    yield call(() => updateDoc(musicRef, updatedItem));
    yield put(updateItemSuccess(updatedItem));
  } catch (error) {
    yield put(updateItemFail(error));
  }
}

 function* musicSaga() {
    yield takeEvery('items/getMusicFetch', workGetMusicFetch);
    yield takeEvery('items/addItemSuccess', workAddItem);
    yield takeEvery('items/removeItemSuccess', workRemoveItem);
    yield takeLatest('items/updateItemSuccess', workUpdateItem);
  }

  export default musicSaga