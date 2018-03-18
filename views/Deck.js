import React, { Component } from 'react'
import { connect } from 'react-redux'
import pluralize from 'pluralize'
import { FlatCard } from '../components/Card'
import Button, {
	ButtonText,
	MinimalButton,
	MinimalButtonText,
} from '../components/Buttons'
import { Header } from '../components/Text'

class Deck extends Component {
	static navigationOptions = () => {
		return {
			title: 'Deck',
		}
	}

	render() {
		// TODO display option to start the quiz
		// TODO display option to add new question card to deck

		const { navigate } = this.props.navigation
		const { deck } = this.props

		return (
			<FlatCard>
				<Header size="h1" pb={2} center>
					{deck.title}
				</Header>
				<Header size="h4" pb={4} center>
					{deck.cardCount} {pluralize('flashcard', deck.cardCount)}
				</Header>
				<Button onPress={() => navigate('Quiz', { deck })}>
					<ButtonText>Start quiz</ButtonText>
				</Button>
				<MinimalButton onPress={() => navigate('AddQuestion', { deck })}>
					<MinimalButtonText>Add flashcard</MinimalButtonText>
				</MinimalButton>
			</FlatCard>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const { decks } = state
	const { id } = ownProps.navigation.state.params
	return {
		deck: {
			...decks[id],
			cardCount: decks[id].cards ? decks[id].cards.length : 0,
		},
	}
}

export default connect(mapStateToProps)(Deck)
