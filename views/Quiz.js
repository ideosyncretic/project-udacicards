import React, { Component } from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import ViewContainer from '../components/ViewContainer'
import { Header } from '../components/Text'
import Flashcard from '../components/Flashcard'
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
			<ViewContainer>
				<Flashcard
					question="Some question about coding here"
					answer="Long answer text demo sample here"
					currentCount={1}
					totalCount={10}
				/>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
				</View>
			</ViewContainer>
		)
	}
}

export default Quiz
