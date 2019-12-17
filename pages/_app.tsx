import { Fragment } from "react"

import App from "next/app"

import Head from "next/head"

import { Provider } from "react-redux"
import store from "stores/index"

import RootLayout from "layouts/root"

class Chiffon extends App {
	render() {
		const { Component, pageProps } = this.props

		return (
			<Fragment>
				<Head>
					<meta
						name="viewport"
						key="viewport"
						content="width=device-width,initial-scale=1.0,viewport-fit=cover,user-scalable=no"
					/>
				</Head>
				<Provider store={store}>
					<RootLayout>						
						<Component {...pageProps} />
					</RootLayout>						
				</Provider>
			</Fragment>
		)
	}
}

export default Chiffon
