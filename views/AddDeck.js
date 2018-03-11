import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Button, { ButtonText } from '../components/Buttons'
import Input from '../components/Inputs'
import { Header } from '../components/Text'
import ViewContainer from '../components/ViewContainer'

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
			<ViewContainer>
				<Header size="h6">WHAT ARE YOU LEARNING?</Header>
				<Field
					name="title"
					value={title}
					onChange={this.handleTitleChange}
					component={Input}
					placeholder="React Native Fancy App"
					size="l"
					autoFocus
					editable={true}
					maxLength={30}
					textAlignVertical={'top'}
				/>
				<Button onPress={() => alert(title)}>
					<ButtonText>CREATE DECK</ButtonText>
				</Button>
			</ViewContainer>
		)
	}
}

export default reduxForm({
	form: 'addDeck',
})(AddDeck)
