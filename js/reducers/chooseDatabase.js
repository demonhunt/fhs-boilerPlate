import type { Action } from '../actions/types'
import { ApiPost, ApiGet } from '../actions/apiFetcher'
export type State = {}
var initialState = {
  value: null,
  database: 'Production',
}
function chooseDatabase(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'CHOOSE_DATABASE':
      let database = action.database
      return { ...state, database: database }
    default:
      return state
  }
}

module.exports = chooseDatabase
