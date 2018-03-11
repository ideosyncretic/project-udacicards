import { combineReducers } from 'redux'
import uuidv4 from 'uuid/v4'
import * as types from '../actions/'
import { reducer as formReducer } from 'redux-form'

const decks = (state = {}, action) => {
	switch (action.type) {
	case types.ADD_DECK:
		const { title } = action
		const id = uuidv4()
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
