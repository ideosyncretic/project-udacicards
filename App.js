import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { StyleSheet, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import DeckList from './views/DeckList'
import Deck from './views/Deck'
import AddDeck from './views/AddDeck'
import AddQuestion from './views/AddQuestion'
import Quiz from './views/Quiz'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StyledStatusBar backgroundColor="#000" barStyle="light-content" />
				<Tabs />
			</View>
		)
	}
}

const Tabs = TabNavigator(
	{
		DeckList: {
			screen: DeckList,
			navigationOptions: {
				tabBarLabel: 'Decks',
			},
		},
		AddDeck: {
			screen: AddDeck,
			navigationOptions: {
				tabBarLabel: 'Add Decks',
			},
		},
		Deck: {
			screen: Deck,
			navigationOptions: {
				tabBarLabel: 'Deck',
			},
		},
		Quiz: {
			screen: Quiz,
			navigationOptions: {
				tabBarLabel: 'Quiz',
			},
		},
		AddQuestion: {
			screen: AddQuestion,
			navigationOptions: {
				tabBarLabel: 'AddQuestion',
			},
		},
	},
	{
		navigationOptions: {
			header: null,
		},
		tabBarOptions: {
			activeTintColor: '#fff',
			indicatorStyle: {
				backgroundColor: '#2c3e50',
			},
			style: {
				height: 56,
				backgroundColor: 'cornflowerblue',
				shadowColor: 'rgba(0, 0, 0, 0.24)',
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowRadius: 6,
				shadowOpacity: 1,
			},
		},
	},
)

const StyledStatusBar = ({ backgroundColor, ...props }) => {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
