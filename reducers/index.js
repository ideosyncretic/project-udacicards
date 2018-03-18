import { combineReducers } from 'redux'
import * as types from '../actions/'
import { reducer as formReducer } from 'redux-form'
import initialDecks from '../utils/data'

const decks = (state = initialDecks, action) => {
	switch (action.type) {
	case types.ADD_DECK:
		const { id, title } = action
		return {
			[id]: {
				id,
				title,
				cards: [],
			},
			...state,
		}
	case types.ADD_CARD:
		const { deckID, card } = action
		return {
			...state,
			[deckID]: {
				...state[deckID],
				cards: [...state[deckID].cards, card],
			},
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
