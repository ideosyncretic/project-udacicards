import React, { Component } from 'react'
import { FlatList, TouchableNativeFeedback } from 'react-native'
import { Header } from '../components/Text'
import Card from '../components/Card'
import ViewContainer from '../components/ViewContainer'

// default view
class DeckList extends Component {
	renderDeckCard = ({ item }) => {
		return (
			<TouchableNativeFeedback>
				<StyledCard key={item.key}>
					<Header size="h2" pb={1} primary center>
						{item.title}
					</Header>
					<Header size="h4">{item.cardCount} cards</Header>
				</StyledCard>
			</TouchableNativeFeedback>
		)
	}
	render() {
		// TODO: display Deck titles
		// TODO: display number of cards in each deck

		const data = [
			{
				key: '12313',
				title: 'Redux',
				cardCount: 10,
			},
			{
				key: '12311',
				title: 'React',
				cardCount: 10,
			},
			{
				key: '12312',
				title: 'React Native',
				cardCount: 14,
			},
			{
				key: '12313',
				title: 'Web Development',
				cardCount: 8,
			},
			{
				key: '12314',
				title: 'Coding for Designers',
				cardCount: 10,
			},
			{
				key: '12316',
				title: 'GraphQL',
				cardCount: 12,
			},
			{
				key: '12315',
				title: 'Server-side Rendering',
				cardCount: 15,
			},
		]
		return (
			<StyledViewContainer>
				<FlatList
					data={data}
					renderItem={this.renderDeckCard}
					contentContainerStyle={{ paddingTop: 16, paddingBottom: 16 }}
				/>
			</StyledViewContainer>
		)
	}
}

const StyledCard = Card.extend`
	padding: 32px 64px;
	margin: 8px 16px;
`

const StyledViewContainer = ViewContainer.extend`
	padding: 0;
`

export default DeckList
