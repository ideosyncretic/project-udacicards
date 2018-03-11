import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AddQuestion extends Component {
	render() {
		// TODO option to enter question
		// TODO option to submit question

		const { navigate } = this.props.navigation
		const { deck } = this.props.navigation.state.params
		return (
			<View>
				<Text>Add question to {deck.title}</Text>
			</View>
		)
	}
}

export default AddQuestion
