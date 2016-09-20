import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  uuid: '803608837',
  author: 'Gustavo Salgado',
  title: 'Is Lorem Ipsum Really Important?',
  preview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  content: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the' + 
    ' industry\'s standard dummy text ever since, when an unknown ristique senectus et netus.' + 
    ' Mellentesque habitant morbi tristique senectus et netus et malesuad',
  labelButton: 'Read Full Article',
  linkButton: '#'
};

export default (state = defaultState, action) => {

    switch (action.type) {

      case ActionTypes.UPDATE_ARTICLE: {
        let { param, text } = action.payload;
        let newState = Object.assign({}, state);
        newState[param] = text; 
        return newState;
      }

      default:
        return state;
    }
}