import type { ThunkAction } from './types'
import { ApiPost } from './apiFetcher'
var md5Hex = require('md5-hex')

function login(username, password): ThunkAction {
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
          });
        }
      })
      .catch(response =>
        dispatch({
          type: "LOGIN_FAIL",
          message: response.message,
        })
      );
  };
}

module.exports = { login }
