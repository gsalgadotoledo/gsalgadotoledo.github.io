import $ from "jquery"

export function fetchPosts() {
	return (dispatch) => {

		const baseAjaxUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
	  let tags = ['meme', 'cats', 'food', 'nature', 'cities', 'sport', 'travel', 'cars'];
    let randomTag = tags[Math.floor(Math.random()*tags.length)];

    dispatch({type: 'FETCH_POSTS'})
    	$.ajax({
        url: `${baseAjaxUrl}&tag=${randomTag}`,
        dataType: 'jsonp',
        jsonpCallback: 'jsonFlickrFeed',
        cache: false,
        success: (data) => {
			    setTimeout(() => {
	          dispatch({type: "FETCH_POSTS_FULFILLED", payload: {about: randomTag, posts: data.items}})
			    }, 1000)
        },
        error: (err) => {
      		dispatch({type: "FETCH_POSTS_REJECTED", payload: err})  	
        }
	    });
	}
}
