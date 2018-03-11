import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
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
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1 }}
				keyboardVerticalOffset={100}
			>
				<StyledScrollView>
					<Header size="h3" pb={2}>
						{deck.title}
					</Header>
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
