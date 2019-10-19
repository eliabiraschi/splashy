/*
  Single reducer used to manage the state of the app
*/

import * as actions from './actions'

const reducer = (state, action) => {
  switch (action.type){
    case actions.UPDATE_PICTURES:
      return { ...state, pictures: action.data }
    case actions.TOGGLE_THEME:
      return { ...state, theme: action.theme }
    case actions.TOGGLE_SLIDESHOW:
      return { ...state, slideShow: !state.slideShow }
    default:
      return state
  }
}

export default reducer
