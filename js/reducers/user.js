'use strict'

import type { Action } from '../actions/types'
import Models from '../common/Models/Models'

export type State = {
  isLogin: boolean,
  userInfor: ?any,
}

var initialState = {
  success: false,
  isLogin: false,
  sessionId: null,
  userInfor: {},
  viewID: null,
  message: null,
  useCamera: true,
}

function user(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      var data = action.data.data
      var infoTemp = {
        bookstoreId: data.bookstoreId,
        bookstoreName: data.bookstoreName,
        fullName: Models.getFullName(
          data.firstName,
          data.middleName,
          data.lastName
        ),
        isWarehouse: data.isWarehouse ? parseInt(data.isWarehouse) : 0,
        isFCenter: data.isFCenter ? parseInt(data.isFCenter) : 0,
        username: action.username,
        password: action.password,
        subRole: data.subRole,
        eUsername: data.eUsername,
        ePassword: data.ePassword,
        isCashier: data.isCashier,
        ebizCode: data.ebizCode,
        role: data.role,
        isBookstore: data.isBookstore,
        old_ebiz_ip: data.old_ebiz_ip,
        old_ebiz_db_name: data.old_ebiz_db_name,
        old_ebiz_username: data.old_ebiz_username,
        old_ebiz_password: data.old_ebiz_password,
      }
      return {
        ...state,
        success: true,
        isLogin: true,
        sessionId: data.token,
        viewID: action.viewID,
        userInfor: infoTemp,
        message: null,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        success: false,
        isLogin: false,
        viewID: action.viewID,
        message: action.message,
      }
    case 'LOGOUT_SUCCESS':
      var userInfor = {}
      if (state.userInfor && state.userInfor.username) {
        userInfor = {
          username: state.userInfor.username,
        }
      }
      return {
        ...state,
        success: true,
        isLogin: false,
        viewID: action.viewID,
        userInfor: userInfor,
        sessionId: '',
        message: null,
      }
    case 'LOGIN_AGAIN_SUCCESS':
      var data = action.data.data
      var infoTemp = state.userInfor
      ;(infoTemp.bookstoreId = data.bookstoreId),
        (infoTemp.bookstoreName = data.bookstoreName),
        (infoTemp.fullName = Models.getFullName(
          data.firstName,
          data.middleName,
          data.lastName
        ))
      infoTemp.isWarehouse = data.isWarehouse ? parseInt(data.isWarehouse) : 0
      infoTemp.isFCenter = data.isFCenter ? parseInt(data.isFCenter) : 0
      infoTemp.subRole = data.subRole
      infoTemp.ePassword = data.ePassword
      infoTemp.eUsername = data.eUsername
      infoTemp.isCashier = data.isCashier
      infoTemp.ebizCode = data.ebizCode
      infoTemp.role = data.role
      infoTemp.isBookstore = data.isBookstore
      infoTemp.old_ebiz_ip = data.old_ebiz_ip
      infoTemp.old_ebiz_db_name = data.old_ebiz_db_name
      infoTemp.old_ebiz_username = data.old_ebiz_username
      infoTemp.old_ebiz_password = data.old_ebiz_password

      return {
        ...state,
        success: true,
        isLogin: true,
        sessionId: data.token,
        userInfor: infoTemp,
        message: null,
      }
    case 'SAVE_USE_CAMERA':
      return { ...state, useCamera: action.useCamera }
    default:
      return state
  }
}

module.exports = user
