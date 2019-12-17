import { combineReducers } from 'redux'

import order from "stores/reducers/order"
import drawer from "stores/reducers/drawer"

const rootReducer = combineReducers({
    order,
    drawer
})

export default rootReducer