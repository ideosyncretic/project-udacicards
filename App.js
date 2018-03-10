import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StyleSheet, View, StatusBar } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import DeckList from './views/DeckList'
import Deck from './views/Deck'
import AddDeck from './views/AddDeck'
import AddQuestion from './views/AddQuestion'
import Quiz from './views/Quiz'
import COLOR from './styles/colors'
import rootReducer from './reducers'
import data from './utils/data'

export default class App extends Component {
	render() {
		const store = createStore(
			rootReducer,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__(),
		)
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StyledStatusBar backgroundColor="#000" barStyle="light-content" />
					<Stacks />
				</View>
			</Provider>
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
				backgroundColor: COLOR.primary,
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

const StackNavigatorOptions = {
	headerTintColor: COLOR.textLight,
	headerStyle: {
		backgroundColor: COLOR.primary,
	},
}

const Stacks = StackNavigator({
	Home: {
		screen: Tabs,
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: StackNavigatorOptions,
	},
	Deck: {
		screen: Deck,
		navigationOptions: StackNavigatorOptions,
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: StackNavigatorOptions,
	},
})

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
