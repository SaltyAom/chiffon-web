import { getDate } from 'libs/connectData'

const initCache = {
	date: getDate(new Date()),
	collection: []
}

const cacheColletion = (state, action) => {
	switch (action.type) {
		case "SET_CACHE_COLLECTION":
			return {
				...state,
				collection: action.payload.collection
			}

		case "ADD_CACHE_COLLECTION":
			return {
				...state,
				collection: [...state.collection, action.payload.collection]
			}

		case "REMOVE_CACHE_COLLECTION":
			let filteredCollection = state.collection.filter(
				collection => collection.time !== action.payload.collection.time
            )
            return {
                ...state,
                collection: filteredCollection
            }

		case "SET_CACHE_DATE":
			return {
				...state,
				date: action.payload.date
			}

		case "RESET_CACHE_COLLECTION":
			return {
                ...state,
                date: getDate(new Date()),
                collection: initCache.collection
            }
	}
}

export default cacheColletion
