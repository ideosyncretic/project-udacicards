import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components/native'
import Input from '../components/Inputs'
import Button, { ButtonText } from '../components/Buttons'
import { Header } from '../components/Text'
import { addCard } from '../actions'

class AddQuestion extends Component {
	static navigationOptions = () => ({
		title: 'Add flashcard',
	})

	state = {
		question: '',
		answer: '',
	}

	handleQuestionChange = question => {
		this.setState({ question })
	}

	handleAnswerChange = answer => {
		this.setState({ answer })
	}

	submit = card => {
		const { deck } = this.props.navigation.state.params
		const { id, title } = deck
		this.props.addCard(id, card)
		this.props.navigation.navigate('Deck', { id, title })
	}

	render() {
		// TODO option to enter question
		// TODO option to submit question

		const { deck } = this.props.navigation.state.params
		const { question, answer } = this.state
		const { handleSubmit } = this.props

		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1 }}
				keyboardVerticalOffset={100}
			>
				<StyledScrollView>
					<Header size="h6">QUESTION</Header>
					<Field
						name="question"
						value={question}
						onChange={this.handleQuestionChange}
						component={Input}
						placeholder="Redux forms cannot be used with React Native. True or false?"
						size="m"
						autoFocus={Platform.OS === 'ios' ? true : false}
						numberOfLines={2}
						editable={true}
						maxLength={100}
						textAlignVertical={'top'}
					/>
					<Header size="h6" pt={4}>
						ANSWER
					</Header>
					<Field
						name="answer"
						value={answer}
						onChange={this.handleAnswerChange}
						component={Input}
						placeholder="False, Redux forms can easily be used with React Native!"
						size="m"
						numberOfLines={2}
						editable={true}
						maxLength={100}
						textAlignVertical={'top'}
					/>
					<Button onPress={handleSubmit(this.submit)}>
						<ButtonText>ADD FLASHCARD</ButtonText>
					</Button>
				</StyledScrollView>
			</KeyboardAvoidingView>
		)
	}
}

const StyledScrollView = styled(ScrollView)`
	padding: 32px;
`

const formOptions = {
	form: 'addQuestion',
}

AddQuestion = reduxForm(formOptions)(AddQuestion)

export default connect(null, { addCard })(AddQuestion)
