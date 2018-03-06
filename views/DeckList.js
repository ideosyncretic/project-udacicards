import React, { Component } from 'react'
import { View, Text, FlatList, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'

// default view
class DeckList extends Component {
	renderDeckCard = ({ item }) => {
		return (
			<TouchableNativeFeedback>
				<Card key={item.key}>
					<Header size="h1" pb={2} primary>
						{item.title}
					</Header>
					<Header size="h3">{item.cardCount} cards</Header>
				</Card>
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
			<ViewContainer>
				<FlatList
					data={data}
					renderItem={this.renderDeckCard}
					contentContainerStyle={{ paddingTop: 16, paddingBottom: 16 }}
				/>
			</ViewContainer>
		)
	}
}

const ViewContainer = styled(View)`
	background-color: #ecf0f1;
`

const Card = styled(View)`
	padding: 32px 64px;
	margin: 8px 16px;
	align-items: center;
	shadow-radius: 3;
	shadow-opacity: 0.8;
	shadow-color: rgba(0,0,0,0.2);
	shadow-offset: {
		width: 0,
		height: 3,
	};
	background-color: white;
	elevation: 3;
`

const Header = styled(Text)`
	text-align: center;
	color: ${props => (props.primary ? 'cornflowerblue' : 'grey')};
	font-size: ${props =>
		(props.size === 'h1' && '32px') || (props.size === 'h3' && '24px')};
	padding: ${({ p }) => (p ? `${p * 8}px` : '0px')};
	padding-bottom: ${({ pb }) => (pb ? `${pb * 8}px` : '0px')};
`

export default DeckList
