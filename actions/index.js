export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const NOTIFICATIONS_ARE_SET = 'NOTIFICATIONS_ARE_SET'

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

export const notificationsAreSet = () => ({
	type: NOTIFICATIONS_ARE_SET,
})
