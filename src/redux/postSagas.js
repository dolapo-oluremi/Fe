import * as types from './actionTypes';
import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call
} from 'redux-saga/effects';

import { loadPostsSuccess , loadPostsError, updatePostSuccess, updatePostError} from './actions';
import { loadPostsApi, updatePostApi } from './api';




function* onLoadPostsStartAsync(){
try{
    const response = yield call(loadPostsApi);
    if(response.status === 200){
        yield delay(500)
        yield put(loadPostsSuccess(response.data))
    }
}
catch(error){
    yield put(loadPostsError(error.response.data))
}
}


// define the put function action


function* onUpdatePostStartAsync({payload:{postValue}}){
   try{
    const response = yield call(updatePostApi, postValue)
    if(response.status === 200){
        yield put(updatePostSuccess())
    }
        
   }
   catch(error){
yield put(updatePostError(error.response.data))
   }
}



//handler
// whenever action is triggered it runs a saga 
function* onLoadPosts(){
    yield takeLatest(types.LOAD_POST_START, onLoadPostsStartAsync)
}
function* onUpdatePost(){
    yield takeLatest(types.UPDATE_POST_START, onUpdatePostStartAsync)
}





//fork manages concurrency on sagas
const postSaga = [
    fork(onLoadPosts),
    fork(onUpdatePost)
]


export default function* rootSaga(){
    yield all([...postSaga])
}