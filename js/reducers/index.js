'use strict';

import {combineReducers} from 'redux';

 const appReducer = combineReducers({
  user: require('./user'),
  chooseDatabase: require('./chooseDatabase'),

})


const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    const {user,chooseDatabase} = state
    state = {user,chooseDatabase}
  }

  return appReducer(state, action)
}



export default rootReducer