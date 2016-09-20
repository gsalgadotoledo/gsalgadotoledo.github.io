import * as ActionTypes from '../constants/ActionTypes'
import * as Config from '../constants/Config'
import $ from "jquery"

export function fetchPosts() {
	return (dispatch) => {

    let tags = Config.TAGS;
    let randomTag = tags[Math.floor(Math.random()*tags.length)];

    /**
     * Showing Loading... message
    */
    dispatch({type: ActionTypes.FETCH_POSTS})
  	
    $.ajax({
      url: `${Config.POSTS_URL}&tag=${randomTag}`,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      success: (data) => {
  	   
        /**
         * A bit delay to note the 
         * Loading... UI implementation
        */
        setTimeout(() => {
          dispatch({
            type: ActionTypes.FETCH_POSTS_FULFILLED, 
            payload: { 
              about: randomTag,
              posts: data.items
            }
          })
  	    }, 1000)
      },
      error: (err) => {

        /**
         * A bit delay to note the 
         * Loading... UI implementation
        */
    		dispatch({
          type: ActionTypes.FETCH_POSTS_REJECTED,
          payload: err
        })
      }
    })
	}
}
