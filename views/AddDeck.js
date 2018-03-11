import React, { Component } from 'react'
import { View } from 'react-native'
import Button, { ButtonText } from '../components/Buttons'
import Input from '../components/Inputs'
import { Header } from '../components/Text'
import ViewContainer from '../components/ViewContainer'
import COLOR from '../styles/colors'

class AddDeck extends Component {
	static navigationOptions = () => ({
		title: 'Create deck',
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
				<Header size="h6">What are you learning?</Header>
				<View>
					<Input
						value={title}
						onChangeText={title => this.handleTitleChange(title)}
						placeholder="Building a time machine"
						size="l"
					/>
				</View>
				<Button onPress={() => alert(title)}>
					<ButtonText>CREATE DECK</ButtonText>
				</Button>
			</StyledViewContainer>
		)
	}
}

const StyledViewContainer = ViewContainer.extend`
	padding: 32px;
`
// const StyledButton = styled(Button)`
// 	padding: 8px;
// 	height: 32px;
// `
export default AddDeck
