import { combineReducers } from 'redux'
import mockDecks from '../utils/data'
// TODO import * as types from '../actions/types'
import { reducer as formReducer } from 'redux-form'

const decks = (state = mockDecks, action) => {
	// switch (action.type) {
	// default:
	// 	return state
	// }
	return state
}

// const questions = (state = [], action) => {
// 	// switch (action.type) {
// 	// default:
// 	// 	return state
// 	// }
// 	return state
// }

const rootReducer = combineReducers({
	decks,
	// questions,
	form: formReducer,
})

export default rootReducer
