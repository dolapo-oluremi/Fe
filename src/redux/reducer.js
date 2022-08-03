
import * as types from './actionTypes';



const initialState = {
    posts: [],
    loading: false,
    error: null
}





const postsReducer = (state = initialState, action) => {
    switch (action.type) {



        case types.LOAD_POST_START:
        case types.UPDATE_POST_START:
            return {
                ...state,
                loading: true
            }

        case types.LOAD_POST_SUCCESS:
            // case types.LOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }

        case types.LOAD_POST_ERROR:
        case types.UPDATE_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }





        default:
            return state;
    }
}






export default postsReducer;