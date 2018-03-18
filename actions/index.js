export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const addDeck = (id, title) => ({
	type: ADD_DECK,
	id,
	title,
})

export const addCard = (id, card) => ({
	type: ADD_CARD,
	deckID: id,
	card,
})
