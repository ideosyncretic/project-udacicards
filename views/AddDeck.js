import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import Button, { ButtonText } from '../components/Buttons'
import { Header } from '../components/Text'
import ViewContainer from '../components/ViewContainer'
import COLOR from '../styles/colors'

class AddDeck extends Component {
	static navigationOptions = () => ({
		title: 'Add Deck',
	})

	state = {
		title: '',
	}

	handleTitleChange = title => {
		this.setState({ title })
	}

	render() {
		// TODO option to enter title
		// TODO option to submit title
		const { title } = this.state
		return (
			<StyledViewContainer>
				<Header size="h4">Name your deck</Header>
				<View>
					<StyledTextInput
						value={title}
						onChangeText={title => this.handleTitleChange(title)}
						multiline
						numberOfLines={2}
						placeholder="Title"
						underlineColorAndroid={COLOR.primary}
						selectionColor={COLOR.primary}
					/>
				</View>
				<Button onPress={() => alert(title)}>
					<ButtonText>ADD DECK</ButtonText>
				</Button>
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
