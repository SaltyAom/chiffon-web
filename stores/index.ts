import { createStore, compose } from 'redux'

import rootReducer from "stores/reducer"

const composeEnhancers =
	(typeof window !== "undefined" &&
		(window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)) ||
	compose

const store = createStore(rootReducer, composeEnhancers())
export default store