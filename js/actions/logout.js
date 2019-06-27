import type { ThunkAction } from './types'
import { ApiPost } from './apiFetcher'

function logout(): ThunkAction {
  return (dispatch, getState) => {
    // var data = {
    //   sessionId: getState().user.sessionId
    // }
    dispatch({
      type: 'RESET_APP',
    })
    dispatch({
      type: 'LOGOUT_SUCCESS',
    })
    // dispatch(ApiPost('bookshelf/logout', data)).then((response) => {
    //   if (response.success){
    //     dispatch({
    //       type: 'LOGOUT_SUCCESS',
    //      })
    //   }
    //   else{
    //     dispatch({
    //       type: 'LOGOUT_FAIL',
    //        message: response.message
    //     })
    //   }
    // })
  }
}

module.exports = { logout }
