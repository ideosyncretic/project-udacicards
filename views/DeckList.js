import React, { Component } from 'react'
import { connect } from 'react-redux'
import pluralize from 'pluralize'
import { FlatList, TouchableOpacity, Platform } from 'react-native'
import { Header } from '../components/Text'
import Card from '../components/Card'
import ViewContainer from '../components/ViewContainer'
import FAB from 'react-native-fab'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../styles/colors'

// default view
class DeckList extends Component {
	_keyExtractor = item => item.id

	_renderItem = ({ item }) => {
		return <DeckCard deck={item} navigate={this.props.navigation.navigate} />
	}
	render() {
		// TODO: display Deck titles
		// TODO: display number of cards in each deck

		const { navigate } = this.props.navigation
		const { decks } = this.props

		return (
			<StyledViewContainer>
				<FlatList
					data={decks}
					renderItem={this._renderItem}
					contentContainerStyle={{ paddingTop: 16, paddingBottom: 96 }}
					keyExtractor={this._keyExtractor}
				/>
				{Platform.OS === 'android' && (
					<FAB
						buttonColor={COLORS.primary}
						iconTextColor={COLORS.textLight}
						onClickAction={() => {
							navigate('AddDeck')
						}}
						visible={true}
						iconTextComponent={<Ionicons name="md-add" />}
					/>
				)}
			</StyledViewContainer>
		)
	}
}

const DeckCard = ({ deck, navigate }) => {
	const { id, title, cardCount } = deck
	return (
		<TouchableOpacity onPress={() => navigate('Deck', { id })}>
			<StyledCard>
				<Header size="h2" pb={1} center>
					{title}
				</Header>
				<Header size="h4">
					{cardCount} {pluralize('flashcard', cardCount)}
				</Header>
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
const mapStateToProps = ({ decks }) => {
	const decksArr = Object.keys(decks).map(id => {
		return {
			...decks[id],
			cardCount: decks[id].cards ? decks[id].cards.length : 0,
		}
	})
	return {
		decks: decksArr,
	}
}

export default connect(mapStateToProps, null)(DeckList)
