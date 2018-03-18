const initialDecks = {
	'12310': {
		id: '12310',
		title: 'Redux',
		cards: [
			{
				question: 'What is Redux?',
				answer:
					'Redux is a predictable state container for JavaScript apps. Redux makes it easy to manage the state of your application. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
			},
			{
				question: 'When should I use Redux?',
				answer:
					'In general, use Redux when you have reasonable amounts of data changing over time, you need a single source of truth, and you find that approaches like keeping everything in a top-level React component\'s state are no longer sufficient.',
			},
			{
				question: 'Can Redux only be used with React?',
				answer:
					'No, Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code. That said, it is most useful when combined with a declarative view implementation that can infer the UI updates from the state changes, such as React or one of the similar libraries available.',
			},
			{
				question: 'Can Redux be used with React Native?',
				answer:
					'Yes, you can use Redux in React Native just like you would in React.',
			},
		],
	},
	'12311': {
		id: '12311',
		title: 'React',
		cards: [
			{
				question:
					'Which React function allows you to render content to be displayed?',
				answer: 'render()',
			},
		],
	},
	'12312': {
		id: '12312',
		title: 'React Native',
		cards: [
			{
				question: 'What’s the difference between React and React Native?',
				answer:
					'React Native is not a different version of React. React Native uses React. Essentially, React Native is a custom renderer for React, just like ReactDOM on Web. Apart from transforming React code to work on iOS and Android, React Native also gives access to the features that these platforms offer.',
			},
			{
				question: 'Can we use React Native with Redux?',
				answer: 'Yes',
			},
			{
				question:
					'Will my React app work on mobile? Will my React Native app work on Web?',
				answer:
					'Unfortunately, no. Most of the React code for Web relies on features available in Web browsers, so it will not work on mobile and vice versa – React Native code relies on the features available on a given mobile platform. The good news is that we can still reuse some code between the mobile and web apps, and the ability to reuse the code will improve in the future.',
			},
			{
				question:
					'Will React Native make my app look and run the same way on iOS and Android?',
				answer:
					'iOS and Android offer different sets of features, and it\'s not React Native’s responsibility to make these environments equal. React Native is only a way of accessing the native components in iOS and Android. I would say that most of the time – with some effort – we can make apps on both platforms look the same, but we shouldn\'t. We should stick to platform guidelines when it comes to user interface. Luckily, React Native provides us with an easy way to adapt the UI to the given platform’s needs.',
			},
			{
				question: 'What is the default flex direction in React Native?',
				answer: 'Column',
			},
		],
	},
	'12313': {
		id: '12313',
		title: 'Web Development',
		cards: [],
	},
	'12314': {
		id: '12314',
		title: 'Coding for Designers',
		cards: [],
	},
	'12316': {
		id: '12316',
		title: 'GraphQL',
		cards: [],
	},
	'12315': {
		id: '12315',
		title: 'Flexbox',
		cards: [],
	},
}

export default initialDecks
