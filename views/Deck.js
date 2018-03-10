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
		const { title } = navigation.state.params
		return {
			title,
		}
	}
	render() {
		// TODO display option to start the quiz
		// TODO display option to add new question card to deck

		const { title, cardCount } = this.props.navigation.state.params

		return (
			<FlatCard>
				<Header size="h1" pb={2}>
					{title}
				</Header>
				<Header size="h4" pb={4}>
					{cardCount} questions
				</Header>
				<Button onPress={() => alert('Start quiz')}>
					<ButtonText>START QUIZ</ButtonText>
				</Button>
				<MinimalButton onPress={() => alert('Add question')}>
					<MinimalButtonText>ADD QUESTION</MinimalButtonText>
				</MinimalButton>
			</FlatCard>
		)
	}
}

export default Deck
