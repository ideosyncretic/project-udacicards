import React, { Component } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Header } from '../components/Text'
import Card from '../components/Card'
import ViewContainer from '../components/ViewContainer'
import FAB from 'react-native-fab'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../styles/colors'
import decks from '../utils/data'

// default view
class DeckList extends Component {
	_keyExtractor = (item, index) => item.id

	_renderItem = ({ item }) => {
		return <DeckCard deck={item} navigate={this.props.navigation.navigate} />
	}
	render() {
		// TODO: display Deck titles
		// TODO: display number of cards in each deck

		return (
			<StyledViewContainer>
				<FlatList
					data={decks}
					renderItem={this._renderItem}
					contentContainerStyle={{ paddingTop: 16, paddingBottom: 96 }}
					keyExtractor={this._keyExtractor}
				/>
				<FAB
					buttonColor={COLORS.primary}
					iconTextColor={COLORS.textLight}
					onClickAction={() => {
						navigate('AddDeck')
					}}
					visible={true}
					iconTextComponent={<Ionicons name="md-add" />}
				/>
			</StyledViewContainer>
		)
	}
}

const DeckCard = ({ deck, navigate }) => {
	const { title, cardCount } = deck
	return (
		<TouchableOpacity onPress={() => navigate('Deck', { deck })}>
			<StyledCard>
				<Header size="h2" pb={1} center>
					{title}
				</Header>
				<Header size="h4">{cardCount} cards</Header>
			</StyledCard>
		</TouchableOpacity>
	)
}

const StyledCard = Card.extend`
	padding: 32px;
	margin: 8px 16px;
`

const StyledViewContainer = ViewContainer.extend`
	padding: 0px;
`

export default DeckList
