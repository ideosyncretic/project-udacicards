import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { Field, reduxForm, reset } from 'redux-form'
import uuidv4 from 'uuid/v4'
import styled from 'styled-components/native'
import Button, { ButtonText } from '../components/Buttons'
import Input from '../components/Inputs'
import { Header } from '../components/Text'
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
		const id = uuidv4()
		this.props.addDeck(id, title)
		this.props.navigation.navigate('Deck', { id })
	}

	render() {
		// TODO option to enter title
		// TODO option to submit title
		const { title } = this.state
		const { handleSubmit } = this.props
		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1 }}
				keyboardVerticalOffset={100}
			>
				<StyledScrollView
					keyboardDismissMode="on-drag"
					keyboardShouldPersistTaps="handled"
				>
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
				</StyledScrollView>
			</KeyboardAvoidingView>
		)
	}
}

const StyledScrollView = styled(ScrollView)`
	padding: 32px;
`

const onSubmitSuccess = (result, dispatch) => dispatch(reset('addDeck'))

const formOptions = {
	form: 'addDeck',
	onSubmitSuccess,
}

const AddDeckWithForm = reduxForm(formOptions)(AddDeck)

export default connect(null, { addDeck })(AddDeckWithForm)
