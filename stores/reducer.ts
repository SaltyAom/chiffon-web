import { combineReducers } from 'redux'

import order from "stores/reducers/order"
import drawer from "stores/reducers/drawer"
import stack from "stores/reducers/stack"

const rootReducer = combineReducers({
    order,
    drawer,
    stack
})

export default rootReducer