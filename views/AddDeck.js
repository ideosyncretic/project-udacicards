import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Button, { ButtonText } from '../components/Buttons'
import Input from '../components/Inputs'
import { Header } from '../components/Text'
import ViewContainer from '../components/ViewContainer'
import { addDeck } from '../actions'

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

	submit = ({ title }) => {
		this.props.addDeck(title)
		this.props.navigation.navigate('Home') // TODO redirect to newly created Deck
	}

	render() {
		// TODO option to enter title
		// TODO option to submit title
		const { title } = this.state
		const { handleSubmit } = this.props
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
				<Button onPress={handleSubmit(this.submit)}>
					<ButtonText>CREATE DECK</ButtonText>
				</Button>
			</ViewContainer>
		)
	}
}

const formOptions = {
	form: 'addDeck',
}

AddDeck = reduxForm(formOptions)(AddDeck)

export default connect(null, { addDeck })(AddDeck)
