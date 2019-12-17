import { combineReducers } from 'redux'

import order from "stores/reducers/order"

const rootReducer = combineReducers({
    order
})

export default rootReducer