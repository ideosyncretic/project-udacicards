import React, { Component } from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../components/Card'
import { Header } from '../components/Text'
import Button, {
	ButtonText,
	MinimalButton,
	MinimalButtonText,
} from '../components/Buttons'
import COLOR from '../styles/colors'

class Quiz extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params
		return {
			title: deck.title,
		}
	}

	componentDidMount() {}

	render() {
		// TODO display a question card
		// TODO display option to view the answer (flips card)
		// TODO display Correct button
		// TODO display Incorrect button
		// TODO display number of remaining question cards in quiz
		// TODO display percentage of correct answers once quiz is complete
		const { deck } = this.props.navigation.state.params
		return (
			<Card>
				<Header size="h6">1/10</Header>
				<Header size="h1" pb={2} center>
					Some question
				</Header>
				<MinimalButton>
					<MinimalButtonText>Flip for answer</MinimalButtonText>
				</MinimalButton>
				<Button>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<ButtonText>CORRECT</ButtonText>
						<MaterialIcons
							name="thumb-up"
							color={COLOR.textLight}
							style={{ paddingLeft: 8 }}
						/>
					</View>
				</Button>
				<Button>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<ButtonText>INCORRECT</ButtonText>
						<MaterialIcons
							name="thumb-down"
							color={COLOR.textLight}
							style={{ paddingLeft: 8 }}
						/>
					</View>
				</Button>
			</Card>
		)
	}
}

export default Quiz
