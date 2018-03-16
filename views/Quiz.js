import React, { Component } from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../components/Card'
import { Header } from '../components/Text'
import ViewContainer from '../components/ViewContainer'
import Flashcard from '../components/Flashcard'
import Button, { ButtonText } from '../components/Buttons'
import COLOR from '../styles/colors'

class Quiz extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params
		return {
			title: deck.title,
		}
	}

	state = {
		currentCardIndex: 0,
		correctCount: 0,
	}

	handleCorrect = () => {
		this.setState(state => ({
			currentCardIndex: state.currentCardIndex + 1,
			correctCount: state.correctCount + 1,
		}))
	}

	handleIncorrect = () => {
		this.setState(state => ({
			currentCardIndex: state.currentCardIndex + 1,
		}))
	}

	getScore = (correct, total) => {
		return correct / total * 100
	}

	render() {
		// TODO display number of remaining question cards in quiz
		// TODO display percentage of correct answers once quiz is complete
		const { deck } = this.props.navigation.state.params
		const { cards } = deck
		const { currentCardIndex, correctCount } = this.state
		return cards[currentCardIndex] ? (
			<ViewContainer>
				<Flashcard
					question={cards[currentCardIndex].question}
					answer={cards[currentCardIndex].answer}
					currentCount={currentCardIndex + 1}
					totalCount={cards.length}
				/>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Button onPress={this.handleCorrect}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<ButtonText>CORRECT</ButtonText>
							<MaterialIcons
								name="thumb-up"
								color={COLOR.textLight}
								style={{ paddingLeft: 8 }}
							/>
						</View>
					</Button>
					<Button onPress={this.handleIncorrect}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<ButtonText>INCORRECT</ButtonText>
							<MaterialIcons
								name="thumb-down"
								color={COLOR.textLight}
								style={{ paddingLeft: 8 }}
							/>
						</View>
					</Button>
				</View>
			</ViewContainer>
		) : (
			<ViewContainer>
				<Card>
					<Header size="h5">Your results</Header>
					<Header size="h3">
						{this.getScore(correctCount, cards.length)}% correct!
					</Header>
				</Card>
			</ViewContainer>
		)
	}
}

export default Quiz
