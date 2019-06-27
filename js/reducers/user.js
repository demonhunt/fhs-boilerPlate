'use strict'

import type { Action } from '../actions/types'
import Models from '../common/Models/Models'

export type State = {
  isLogin: boolean,
  userInfor: ?any,
}

var initialState = {
  success: false,
 
}

function user(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
     
      return {
        ...state,
      
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
       
      }
    case 'LOGOUT_SUCCESS':
     
      return {
        ...state,
      
      }
    case 'LOGIN_AGAIN_SUCCESS':
    
      return {
        ...state,
    
      }
   
    default:
      return state
  }
}

module.exports = user
