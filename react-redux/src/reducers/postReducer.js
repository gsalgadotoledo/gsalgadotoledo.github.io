export default (state={
    posts: [],
    loading: false,
    loaded: false,
    error: null,
  }, action) => {

    switch (action.type) {
      case 'FETCH_POSTS': {
        return {
        	...state,
        	loading: true
        }
      }
      case 'FETCH_POSTS_REJECTED': {
        return {
        	...state,
        	loading: false,
        	error: action.payload
        }
      }
      case 'FETCH_POSTS_FULFILLED': {
        return {
          ...state,
          loading: false,
          about: action.payload.about,
          posts: action.payload.posts,
        }
      }
    }

    return state;
}