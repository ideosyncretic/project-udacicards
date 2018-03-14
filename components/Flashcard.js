import React, { Component } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Header } from './Text'
import { MinimalButton, MinimalButtonText } from './Buttons'

// Sources:
// https://github.com/facebook/react-native/issues/1973#issuecomment-262059217
// https://github.com/browniefed/examples/blob/animated_basic/flip/animatedbasic/index.android.js

export default class Flashcard extends Component {
	state = {
		side: 'front',
	}
	componentWillMount() {
		this.animatedValue = new Animated.Value(0)
		this.value = 0
		this.animatedValue.addListener(({ value }) => {
			this.value = value
		})
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['0deg', '180deg'],
		})
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['180deg', '360deg'],
		})
		this.frontOpacity = this.animatedValue.interpolate({
			inputRange: [89, 90],
			outputRange: [1, 0],
		})
		this.backOpacity = this.animatedValue.interpolate({
			inputRange: [89, 90],
			outputRange: [0, 1],
		})
	}
	flipCard() {
		if (this.value >= 90) {
			Animated.spring(this.animatedValue, {
				toValue: 0,
				friction: 10,
				tension: 100,
			}).start()
			this.setState({ side: 'front' })
		} else {
			Animated.spring(this.animatedValue, {
				toValue: 180,
				friction: 10,
				tension: 100,
			}).start()
			this.setState({ side: 'back' })
		}
	}

	render() {
		const frontAnimatedStyle = {
			transform: [{ rotateY: this.frontInterpolate }],
			opacity: this.frontOpacity,
		}
		const backAnimatedStyle = {
			transform: [{ rotateY: this.backInterpolate }],
			opacity: this.backOpacity,
		}
		const { side } = this.state
		const { currentCount, totalCount, question, answer } = this.props
		return (
			<Container>
				<TopRow>
					<Header size="h6">
						Flashcard {currentCount} of {totalCount}
					</Header>
					<MinimalButton onPress={() => this.flipCard()}>
						<MinimalButtonText>
							{(side === 'front' && 'See Answer') ||
								(side === 'back' && 'See Question')}
						</MinimalButtonText>
					</MinimalButton>
				</TopRow>

				<View>
					<StyledFlashCard style={frontAnimatedStyle}>
						<Header size="h2" center>
							{question}
						</Header>
					</StyledFlashCard>
					<FlashcardAnswer style={backAnimatedStyle}>
						<Header size="h6">{answer}</Header>
					</FlashcardAnswer>
				</View>
			</Container>
		)
	}
}

const { width } = Dimensions.get('window')

const Container = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
	background-color: white;
`

const StyledFlashCard = styled(Animated.View)`
	align-items: center;
	justify-content: center;
	backface-visibility: hidden;
	width: ${width};
	padding: 0px 48px;
`

const FlashcardAnswer = StyledFlashCard.extend`
	position: absolute;
	top: 0;
	left: 0;
`

const TopRow = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: ${width};
	padding: 0px 48px;
`
