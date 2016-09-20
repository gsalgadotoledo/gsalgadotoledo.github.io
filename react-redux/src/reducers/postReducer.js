import * as ActionTypes from '../constants/ActionTypes'

let defaultState = {
  posts: [],
  loading: false,
  loaded: false,
  error: null
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_POSTS: {
      return {
      	...state,
      	loading: true
      }
    }
    case ActionTypes.FETCH_POSTS_REJECTED: {
      return {
      	...state,
      	loading: false,
      	error: action.payload
      }
    }
    case ActionTypes.FETCH_POSTS_FULFILLED: {
      return {
        ...state,
        loading: false,
        about: action.payload.about,
        posts: action.payload.posts,
      }
    }
    default:
      return state;
  }
}