import moment from 'moment'
import { Notifications } from 'expo'

export const scheduleNotifications = () => {
	const localNotification = {
		title: 'Refresh your knowledge!',
		body: 'Take a quiz',
		data: { type: 'delayed' },
	}

	const tomorrow = moment()
		.add(1, 'days')
		.hours(19)
		.startOf('hour')
		.valueOf() // time in Unix epoch milliseconds

	// config object is required by scheduleLocalNotificationsAsync()
	const scheduleOptions = {
		time: tomorrow,
		repeat: 'day',
	}

	console.log('Scheduling notification', {
		localNotification,
		scheduleOptions,
	})

	Notifications.scheduleLocalNotificationAsync(
		localNotification,
		scheduleOptions,
	)
		.then(() => console.info('Notification scheduled'))
		.catch(err => console.error(err))
}

export const cancelScheduledNotifications = () => {
	Notifications.cancelAllScheduledNotificationsAsync()
		.then(() => console.info('Cancel scheduled notifications'))
		.catch(err => console.error(err))
}
