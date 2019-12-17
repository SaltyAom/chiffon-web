import { memo } from "react"

import { connect } from 'react-redux'

import MenuIcon from "components/icon/menu"

import { css } from "libs/aphrodite"
import { headerTools, pageName, navigation, navigationIcon } from "./styles"

import THeaderTools, { IHeaderToolsProps, IHeaderToolsConnectProps, IHeaderToolsConnectDispatch } from "./types"

const mapStateToProps = (store, ownProps: IHeaderToolsProps): IHeaderToolsConnectProps => ({
	props: ownProps
})

const mapDispatchToProps = (dispatch): IHeaderToolsConnectDispatch => ({
	dispatch: {
		toggleDrawer: () => dispatch({
			type: "TOGGLE_DRAWER"
		})
	}
})

const HeaderTools: THeaderTools = memo(({ props, dispatch }) => {
	let { name } = props,
		{ toggleDrawer } = dispatch

	return (
		<aside className={css(headerTools)}>
			<button className={css(navigation)} onClick={() => toggleDrawer()}>
				<MenuIcon className={css(navigationIcon)} color="var(--fade)" />
			</button>
			<h1 className={css(pageName)}>{name}</h1>
		</aside>
	)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderTools)