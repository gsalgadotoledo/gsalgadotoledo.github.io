import * as ActionTypes from '../constants/ActionTypes';

export function updateArticle(param, text) {
  
  return {
    type: ActionTypes.UPDATE_ARTICLE,
    payload: {
        text,
        param
    }
  }
}
