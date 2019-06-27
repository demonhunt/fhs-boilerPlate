import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from './promise'
import reducers from '../reducers'
var { createLogger } = require('redux-logger')
import { persistStore, autoRehydrate } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
})

var createBookshelfStore = applyMiddleware(thunk, promise, logger)(createStore)

function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(createBookshelfStore)(reducers)
  persistStore(store, { storage: AsyncStorage }, onComplete)

  if (isDebuggingInChrome) {
    window.store = store
  }
  return store
}
module.exports = configureStore
