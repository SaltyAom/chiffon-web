import { combineReducers } from 'redux'

import order from "stores/reducers/order"
import drawer from "stores/reducers/drawer"
import stack from "stores/reducers/stack"
import user from "stores/reducers/user"
import workspace from "stores/reducers/workspace"

const rootReducer = combineReducers({
    order,
    drawer,
    stack,
    user,
    workspace
})

export default rootReducer