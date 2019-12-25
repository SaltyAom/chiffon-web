import { isServer } from "libs/helpers"

export const init = () => {
	const firebase = require("firebase/app")
	require("firebase/firestore")

	try {
		firebase.initializeApp({
			apiKey: "AIzaSyBKF4CLQTIHtv_DKHfV-8ia2fbejI_Pljo",
			authDomain: "chiffon-660ab.firebaseapp.com",
			databaseURL: "https://chiffon-660ab.firebaseio.com",
			projectId: "chiffon-660ab",
			storageBucket: "chiffon-660ab.appspot.com",
			messagingSenderId: "832731953495",
			appId: "1:832731953495:web:74f511f1cd0b4320802612"
		})
		firebase.firestore().enablePersistence()
	} catch (err) {
		// we skip the "already exists" message which is
		// not an actual error when we're hot-reloading
		if (!/already exists/.test(err.message)) {
			console.error("Firebase initialization error", err.stack)
		}
	}

	let firestore = firebase.firestore()

	return { firebase: firebase, firestore: firestore }
}

export const getCache = async date => {
	if (isServer) return

	let { firestore } = init()

	firestore.disableNetwork()

	return firestore
		.collection("aomkirby123@gmail.com")
		.doc("history")
		.collection(date)
		.orderBy("time", "desc")
		.get()
}

export const getCollection = async date => {
	if (isServer) return

	let { firestore } = init()

	return firestore
		.collection("aomkirby123@gmail.com")
		.doc("history")
		.collection(date)
		.orderBy("time", "desc")
		.get()
}

export const getItem = async date => {
	if (isServer) return

	let { firestore } = init()

	let event = new Date(date),
		day = getDate(event),
		time = getTime(event)

	console.log(day, time)

	return firestore
		.collection("aomkirby123@gmail.com")
		.doc("history")
		.collection(day)
		.doc(time)
		.get()
}

export const getDate = (event) => `${event.getUTCFullYear()}-${event.getUTCMonth() + 1}-${event.getUTCDate()}`,
	getTime = (event) => `${event.getUTCHours()}:${event.getUTCMinutes()}:${event.getUTCSeconds()}`

export const getUpdate = async (date, callback) => {
	if (isServer) return

	let { firestore } = init()

	firestore.enableNetwork()

	firestore
		.collection("aomkirby123@gmail.com")
		.doc("history")
		.onSnapshot(collection => callback(collection))
}
