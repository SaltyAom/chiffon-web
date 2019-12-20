export const authentication = () => {
	const firebase = require("firebase/app")
	require("firebase/auth")

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
	} catch (err) {
		// we skip the "already exists" message which is
		// not an actual error when we're hot-reloading
		if (!/already exists/.test(err.message)) {
			console.error("Firebase initialization error", err.stack)
		}
	}

	return { firebase: firebase, auth: firebase.auth() }
}

export const isLoggedIn = () => {
	let { auth } = authentication(),
		{ currentUser } = auth

	return currentUser
}

export const onAuthChanged = callback =>
	authentication().auth.onAuthStateChanged(user => callback(user))

export const login = () => {
	let { firebase, auth } = authentication()

	let provider = new firebase.auth.GoogleAuthProvider()

	auth.signInWithPopup(provider)
		.then(result => {
			let token = result.credential.accessToken,
				user = result.user

			console.log(user)
		})
		.catch(error => {
			console.log(error)
		})
}
