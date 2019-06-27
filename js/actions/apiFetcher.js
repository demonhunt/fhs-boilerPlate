import type { ThunkAction } from "./types";
import Setting from "../common/setting";
var API_URL = "";
var THIRD_API_URL = "";
import langvi from "../common/langvi";
const axios = require("axios");



async function reLogin(getState, dispatch,url, data, error,resolve,thirdHost = false){
  var user = getState().user;
  let loginData = {
    username: user.userInfor.username,
    password: user.userInfor.password
  };
  FetchPost("bookshelf/login", loginData,getState)
    .then(loginResponse => {
      if (loginResponse.success) {
        dispatch({
          type: "LOGIN_AGAIN_SUCCESS",
          data: loginResponse
        });
        if (loginResponse.data && loginResponse.data.token) {
          if (thirdHost) {
            data.token = loginResponse.data.token;
          } else {
            data.sessionId = loginResponse.data.token;
          }
          FetchPost(url, data, getState,thirdHost)
            .then(resp => {
              resolve(resp);
            })
            .catch(error2 => {
              if (
                error.message == "ERR_NEED_LOGIN" ||
                error.error == "ERR_NEED_LOGIN"
              ) {
                dispatch({
                  type: "LOGOUT_SUCCESS"
                });
              } else {
                resolve(error2);
              }
            });
        }
      } else {
        dispatch({
          type: "LOGOUT_SUCCESS"
        });
        resolve(loginResponse);
      }
    })
    .catch(loginError => {
      dispatch({
        type: "LOGOUT_SUCCESS"
      });

      //no need to return promise because it will load login view
      // resolve(loginError)
    });
}

function ApiPost(
  url,
  data,
  thirdHost = false
): ThunkAction {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      FetchPost(url, data,getState, thirdHost)
        .then(response => {
          resolve(response);
        })
        .catch(async error => {
          if (
            error.message == "ERR_NEED_LOGIN" ||
            error.error == "ERR_NEED_LOGIN"
          ) {
           await reLogin(getState,dispatch,url,data,error,resolve,thirdHost)
          } else {
            reject(error);
          }
        });
    });
}

function FetchPost(
  url,
  data,
  getState,
  thirdHost = false,
): Promise {

    switch (getState().chooseDatabase.database) {
      case "Local":
        API_URL = "http://192.168.1.147:88/";
        THIRD_API_URL = "http://app.fahasa.com:8082/";
        break;
      case "Test":
        API_URL = "https://app.fahasa.com:88/";
        THIRD_API_URL = "http://app.fahasa.com:8082/";
        break;
      case "Production":
        API_URL = "https://fahasa.com:88/";
        THIRD_API_URL = "http://app.fahasa.com:8080/";
        break;
      default:
    }
  
  if (thirdHost) return FetchPostThirdHost(url, data);

  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + url, data)
      .then(res => {
        return res.data
      })
      .catch(response => {


        return {
          success: false,
          message: response.message
            ? response.message
            : langvi["ERROR_SERVER_500"],
          error: response.error ? response.error : langvi["ERROR_SERVER_500"]
        };
      })
      .then(json => {
        if (json.success) {
          resolve(json);
        } else {
          let _error= {
            success: false,
            error: json.error
              ? langvi["error"][json.error]
                ? langvi["error"][json.error]
                : json.error
              : langvi["error"][json.message]
              ? langvi["error"][json.message]
              : json.message,
            message: json.message
              ? langvi["error"][json.message]
                ? langvi["error"][json.message]
                : json.message
              : langvi["error"][json.error]
              ? langvi["error"][json.error]
              : json.error
          }
          reject(_error);
        }
      });
  });
}


module.exports = { ApiPost };
