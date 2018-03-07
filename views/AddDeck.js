import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import styled from 'styled-components/native'
import { Header } from '../components/Text'
import ViewContainer from '../components/ViewContainer'
import COLOR from '../styles/colors'

class AddDeck extends Component {
	render() {
		// TODO option to enter title
		// TODO option to submit title

		return (
			<StyledViewContainer>
				<Header size="h4">Name your deck</Header>
				<View>
					<StyledTextInput
						multiline
						numberOfLines={2}
						placeholder="Title"
						underlineColorAndroid={COLOR.primary}
					/>
				</View>
				<Button title="Add deck" color={COLOR.primary} onPress={() => {}} />
			</StyledViewContainer>
		)
	}
}

const StyledTextInput = styled(TextInput)`
	font-size: 28px;
	padding: 8px;
`
const StyledViewContainer = ViewContainer.extend`
	padding: 32px;
`
// const StyledButton = styled(Button)`
// 	padding: 8px;
// 	height: 32px;
// `
export default AddDeck
