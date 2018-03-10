import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params
		return {
			title,
		}
	}
	render() {
		// TODO display deck title
		// TODO display number of cards in deck
		// TODO display option to start the quiz
		// TODO display option to add new question card to deck

		const { title, cardCount } = this.props.navigation.state.params
		return (
			<View>
				<Text>{title}</Text>
				<Text>{cardCount}</Text>
			</View>
		)
	}
}

export default Deck
