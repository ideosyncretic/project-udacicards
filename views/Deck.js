import React, { Component } from 'react'
import { FlatCard } from '../components/Card'
import Button, {
	ButtonText,
	MinimalButton,
	MinimalButtonText,
} from '../components/Buttons'
import { Header } from '../components/Text'

class Deck extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params
		return {
			title: `Deck: ${deck.title}`,
		}
	}
	render() {
		// TODO display option to start the quiz
		// TODO display option to add new question card to deck

		const { navigate } = this.props.navigation
		const { deck } = this.props.navigation.state.params
		const { id, title, cardCount } = deck

		// TODO get questions from store

		return (
			<FlatCard>
				<Header size="h1" pb={2} center>
					{title}
				</Header>
				<Header size="h4" pb={4} center>
					{cardCount} questions
				</Header>
				<Button onPress={() => navigate('Quiz', { title })}>
					<ButtonText>START QUIZ</ButtonText>
				</Button>
				<MinimalButton onPress={() => navigate('AddQuestion', { deck })}>
					<MinimalButtonText>ADD QUESTION</MinimalButtonText>
				</MinimalButton>
			</FlatCard>
		)
	}
}

export default Deck
