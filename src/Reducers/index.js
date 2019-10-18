import * as actions from './actions'

const reducer = (state, action) => {
  switch (action.type){
    case actions.UPDATE_PICTURES:
      return { ...state, pictures: action.data }
    default:
      return state
  }
}

export default reducer
