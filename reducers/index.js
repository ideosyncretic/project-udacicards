import { combineReducers } from 'redux'
import * as types from '../actions/'
import { reducer as formReducer } from 'redux-form'

const decks = (state = {}, action) => {
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

// const currentDeck = (state = {}, action) => {
// 	switch (action.type) {
// 		case types.GET_DECK:
// 		return state
// }

const rootReducer = combineReducers({
	decks,
	form: formReducer,
})

export default rootReducer
