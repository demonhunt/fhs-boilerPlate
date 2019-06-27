import type { ThunkAction } from './types'
import { ApiPost } from './apiFetcher'
var md5Hex = require('md5-hex')

function login(username, password, viewID): ThunkAction {
  return (dispatch, getState) => {
    var data = {
      username: username,
      password: md5Hex(password + "fhs")
    };
    dispatch(ApiPost("bookshelf/login", data))
      .then(response => {
        if (response.success) {
          dispatch({
            type: "LOGIN_SUCCESS",
            viewID: viewID,
            data: response,
            username: username,
            password: md5Hex(password + "fhs")
          });
        }
      })
      .catch(response =>
        dispatch({
          type: "LOGIN_FAIL",
          viewID: viewID,
          message: response.message,
          viewID: viewID
        })
      );
  };
}

function saveUseCamera(flag): ThunkAction {
  return dispatch => {
    dispatch({
      type: 'SAVE_USE_CAMERA',
      useCamera: flag,
    })
  }
}

module.exports = { login, saveUseCamera }
