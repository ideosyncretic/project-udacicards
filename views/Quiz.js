import React, { Component } from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../components/Card'
import { Header } from '../components/Text'
import ViewContainer from '../components/ViewContainer'
import Flashcard from '../components/Flashcard'
import Button, {
	ButtonText,
	MinimalButton,
	MinimalButtonText,
} from '../components/Buttons'
import pluralize from 'pluralize'
import styled from 'styled-components/native'
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

	restartQuiz = () => {
		this.setState(() => ({
			currentCardIndex: 0,
			correctCount: 0,
		}))
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

	returnToDeck = () => {
		this.props.navigation.goBack()
	}
	render() {
		const { navigate } = this.props.navigation
		const { deck } = this.props.navigation.state.params
		const { cards } = deck
		const { currentCardIndex, correctCount } = this.state
		return cards[currentCardIndex] ? (
			<ViewContainer>
				{cards.map(
					(card, index) =>
						currentCardIndex === index && (
							<Flashcard
								key={currentCardIndex}
								question={cards[currentCardIndex].question}
								answer={cards[currentCardIndex].answer}
								currentCount={currentCardIndex + 1}
								totalCount={cards.length}
							/>
						),
				)}

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
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
			<ViewContainer style={{ justifyContent: 'space-between' }}>
				<StyledResultsCard
					score={this.getScore(correctCount, cards.length)}
					correctCount={correctCount}
					totalCount={cards.length}
				/>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<MinimalButton onPress={() => this.returnToDeck()}>
						<MinimalButtonText>Back to deck</MinimalButtonText>
					</MinimalButton>
					<Button onPress={() => this.restartQuiz()}>
						<ButtonText>Take quiz again</ButtonText>
					</Button>
				</View>
			</ViewContainer>
		)
	}
}

const ResultsCard = ({ score, correctCount, totalCount }) => {
	let message = ''
	if (score === 0) {
		message = 'Try again! 💪 '
	}
	if (score >= 0 && score <= 60) {
		message = 'Good effort! 👏'
	}
	if (score >= 60) {
		message = 'Keep it up! 🙌'
	}
	if (score === 100) {
		message = 'Awesome! 👌'
	}
	return (
		<Card>
			<Header size="h2" center pb={3}>
				{message}
			</Header>
			<Header size="h3" center pb={2}>
				Score: {score}%
			</Header>
			<Header size="h6" center>
				{`You answered ${correctCount} out of ${totalCount} ${pluralize(
					'question',
					totalCount,
				)} correctly.`}
			</Header>
		</Card>
	)
}

const StyledResultsCard = styled(ResultsCard)`
	flex: 1;
`

export default Quiz
