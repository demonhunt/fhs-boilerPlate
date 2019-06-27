'use strict'

import * as loginActions from './login'
import * as logoutActions from './logout'

module.exports = {
  ...loginActions,
  ...logoutActions,
  
}
