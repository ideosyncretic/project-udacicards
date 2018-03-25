import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, View, StatusBar, Platform } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from './utils/configureStore'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import DeckList from './views/DeckList'
import Deck from './views/Deck'
import AddDeck from './views/AddDeck'
import AddQuestion from './views/AddQuestion'
import Quiz from './views/Quiz'
import COLOR from './styles/colors'
import { Permissions } from 'expo'
import { scheduleNotifications } from './utils/scheduleNotifications'

export default class App extends Component {
	setNotifications = async () => {
		await Permissions.askAsync(Permissions.NOTIFICATIONS)
		scheduleNotifications()
	}

	componentDidMount() {
		this.setNotifications()
	}

	render() {
		return (
			<Provider store={storeConfig().store}>
				<PersistGate loading={null} persistor={storeConfig().persistor}>
					<View style={styles.container}>
						<StyledStatusBar backgroundColor="#000" barStyle="light-content" />
						<Stacks />
					</View>
				</PersistGate>
			</Provider>
		)
	}
}

const TabContent = () => {
	if (Platform.OS === 'ios') {
		return {
			DeckList: {
				screen: DeckList,
				navigationOptions: {
					tabBarLabel: 'My Decks',
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name="ios-school" size={30} color={tintColor} />
					),
				},
			},
			AddDeck: {
				screen: AddDeck,
				navigationOptions: {
					tabBarLabel: 'Add Deck',
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name="ios-add-circle" size={30} color={tintColor} />
					),
				},
			},
		}
	}
	if (Platform.OS === 'android') {
		return {
			DeckList: {
				screen: DeckList,
				navigationOptions: {
					tabBarLabel: 'My Decks',
				},
			},
		}
	}
}

const Tabs = TabNavigator(
	{
		...TabContent(),
	},
	{
		navigationOptions: {
			header: null,
		},
		tabBarOptions: {
			activeTintColor:
				Platform.OS === 'android' ? COLOR.textLight : COLOR.primary,
			inactiveTintColor:
				Platform.OS === 'android' ? COLOR.textLight : COLOR.inactive,
			indicatorStyle: {
				backgroundColor: COLOR.backgroundLight,
			},
			style: {
				height: 56,
				backgroundColor:
					Platform.OS === 'android' ? COLOR.primary : COLOR.backgroundLight,
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
	AddQuestion: {
		screen: AddQuestion,
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
