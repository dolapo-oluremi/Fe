import * as types from './actionTypes';

export const loadPostsStart = () =>({
    type: types.LOAD_POST_START,
})
export const loadPostsSuccess = (posts) =>({
    type: types.LOAD_POST_SUCCESS,
    payload: posts
})
export const loadPostsError = (error) =>({
    type: types.LOAD_POST_ERROR,
    payload: error
})


export const updatePostStart = (postInfo) =>({
    type: types.UPDATE_POST_START,
    payload: postInfo
})
export const updatePostSuccess = () =>({
    type: types.UPDATE_POST_SUCCESS
})
export const updatePostError = (error) =>({
    type: types.UPDATE_POST_ERROR,
    payload: error
})