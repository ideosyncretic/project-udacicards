import { combineReducers } from 'redux'
import mockDecks from '../utils/data'
import uuid from 'react-native-uuid'
import * as types from '../actions/'
import { reducer as formReducer } from 'redux-form'

const decks = (state = mockDecks, action) => {
	switch (action.type) {
	case types.ADD_DECK:
		const { title } = action
		const id = 0
		return {
			[id]: {
				id,
				title,
				cards: [],
			},
			...state,
		}
	default:
		return state
	}
}

const rootReducer = combineReducers({
	decks,
	form: formReducer,
})

export default rootReducer
