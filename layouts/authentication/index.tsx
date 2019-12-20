import { useState, useEffect } from "react"

import { connect } from 'react-redux'

import { onAuthChanged, login } from "libs/authentication"

import { css } from "libs/aphrodite"
import { container, googleIcon, withGoogle } from "./styles"

import TAuthentication, { IAuthenticationConnectProps, IAuthenticationConnectDispatch } from './types'

const mapStateToProps = (state, ownProps): IAuthenticationConnectProps => ({
	store: state.user,
	props: ownProps
})

const mapDispatchToProps = (dispatch): IAuthenticationConnectDispatch => ({
	dispatch: {
		updateUser: ({ name, email, profile }) => dispatch({
			type: "UPDATE_USER",
			payload: {
				name: name,
				email: email,
				profile: profile
			}
		}),
		resetUser: () => dispatch({
			type: "RESET_USER"
		})
	}
})

const Authentication: TAuthentication = ({ store, dispatch, props }) => {
	let { isLoggedIn } = store,
		{ updateUser, resetUser } = dispatch,
		{ children } = props

	let [isAuth, updateAuth] = useState(isLoggedIn)

	useEffect(() => {
		onAuthChanged(user => {
			if (!user){
				updateAuth(false)
				return resetUser()
			}
			
			updateAuth(user)
			updateUser({
				name: user.displayName,
				email: user.email,
				profile: user.photoURL
			})
		})
    }, [])
    
	if (!isAuth)
		return (
			<main className={css(container)}>
				<button className={css(withGoogle)} onClick={() => login()}>
					<img
						className={css(googleIcon)}
						src="/app/icon/google.svg"
					/>
					Sign in with Google
				</button>
			</main>
		)

	return children
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authentication)