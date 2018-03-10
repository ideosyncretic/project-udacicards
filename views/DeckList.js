import React, { Component } from 'react'
import { FlatList, TouchableNativeFeedback } from 'react-native'
import { Header } from '../components/Text'
import Card from '../components/Card'
import ViewContainer from '../components/ViewContainer'
import FAB from 'react-native-fab'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../styles/colors'
import data from '../utils/data'

// default view
class DeckList extends Component {
	render() {
		// TODO: display Deck titles
		// TODO: display number of cards in each deck

		const { navigate } = this.props.navigation
		return (
			<StyledViewContainer>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<DeckCard key={item.key} {...item} navigate={navigate} />
					)}
					contentContainerStyle={{ paddingTop: 16, paddingBottom: 96 }}
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

const DeckCard = ({ title, cardCount, navigate }) => {
	return (
		<TouchableNativeFeedback
			onPress={() => navigate('Deck', { title, cardCount })}
		>
			<StyledCard>
				<Header size="h2" pb={1} primary center>
					{title}
				</Header>
				<Header size="h4">{cardCount} cards</Header>
			</StyledCard>
		</TouchableNativeFeedback>
	)
}

const StyledCard = Card.extend`
	padding: 32px 64px;
	margin: 8px 16px;
`

const StyledViewContainer = ViewContainer.extend`
	padding: 0px;
`

export default DeckList
