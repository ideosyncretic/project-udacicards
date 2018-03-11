import React, { Component } from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components/native'

import Input from '../components/Inputs'
import Button, { ButtonText } from '../components/Buttons'
import { Header } from '../components/Text'

class AddQuestion extends Component {
	static navigationOptions = () => ({
		title: 'Add quiz question',
	})

	state = {
		question: '',
		answer: '',
	}

	submit = values => {
		console.log('submitting form', values)
	}

	handleQuestionChange = question => {
		this.setState({ question })
	}

	handleAnswerChange = answer => {
		this.setState({ answer })
	}

	render() {
		// TODO option to enter question
		// TODO option to submit question

		const { navigate } = this.props.navigation
		const { deck } = this.props.navigation.state.params
		const { question, answer } = this.state
		const { handleSubmit } = this.props

		return (
			<KeyboardAvoidingView behavior="padding">
				<StyledScrollView>
					<Header size="h3" pb={2}>
						{deck.title}
					</Header>
					<Header size="h6">Question</Header>
					<Field
						name="question"
						value={question}
						onChange={this.handleQuestionChange}
						component={Input}
						placeholder="Redux forms cannot be used with React Native. True or false?"
						size="m"
						autoFocus
						numberOfLines={4}
						editable={true}
						maxLength={100}
						textAlignVertical={'top'}
						underlineColorAndroid={'transparent'}
					/>
					<Header size="h6">Answer</Header>
					<Field
						name="answer"
						value={answer}
						onChange={this.handleAnswerChange}
						component={Input}
						placeholder="False"
						size="m"
						numberOfLines={4}
						editable={true}
						maxLength={100}
						textAlignVertical={'top'}
						underlineColorAndroid={'transparent'}
					/>
					<Button onPress={handleSubmit(this.submit)}>
						<ButtonText>ADD QUESTION</ButtonText>
					</Button>
				</StyledScrollView>
			</KeyboardAvoidingView>
		)
	}
}

const StyledScrollView = styled(ScrollView)`
	padding: 32px;
`

export default reduxForm({
	form: 'addQuestion',
})(AddQuestion)
