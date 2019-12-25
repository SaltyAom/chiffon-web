import { memo, Fragment } from "react"

import { connect } from "react-redux"

import { useRouter } from "next/router"

import DrawerNavigation from "./drawerNavigation"
import ProfileBadge from "./profile"

import DashboardIcon from "components/icon/dashboard"
import ChartIcon from "components/icon/chart"
import MoneyIcon from "components/icon/money"

import { css } from "libs/aphrodite"
import {
	drawer as drawerStyle,
	__drawer_isOpen,
	__drawer_sticky,
	icon,
	__icon_isOpen,
	navigationBody
} from "./styles"

import TDrawer, { IDrawerConnectProps } from "./types"

const mapStateToProps = (state): IDrawerConnectProps => ({
	store: {
		drawer: state.drawer,
		user: state.user
	}
})

const Sidebar: TDrawer = memo(({ store }) => {
	let { drawer, user } = store,
		{ isOpen } = drawer,
		{ name, profile, isLoggedIn } = user

	let { route } = useRouter()

	let applyPath = (path, route) => ({
			href: path,
			isActive: path === route
		}),
		applyColor = (path, route) =>
			path === route ? { color: "#fff" } : { color: "var(--content)" },
		applyState = (rootClass, activeClass) =>
			isOpen ? css(rootClass, activeClass) : css(rootClass)

	let navigationLists = [
		{
			title: "home",
			Icon: (
				<DashboardIcon
					className={applyState(icon, __icon_isOpen)}
					{...applyColor("/", route)}
				/>
			),
			isOpen: isOpen,
			...applyPath("/", route)
		},
		{
			title: "analyze",
			Icon: (
				<ChartIcon
					className={applyState(icon, __icon_isOpen)}
					{...applyColor("/analyze", route)}
				/>
			),
			isOpen: isOpen,
			...applyPath("/analyze", route)
		},
		{
			title: "goal",
			Icon: (
				<MoneyIcon
					className={applyState(icon, __icon_isOpen)}
					{...applyColor("/goal", route)}
				/>
			),
			isOpen: isOpen,
			...applyPath("/goal", route)
		}
	]

	return (
		<Fragment>
			<div className={applyState(drawerStyle, __drawer_isOpen)} />
			<aside className={applyState([drawerStyle, __drawer_sticky], __drawer_isOpen)}>
				<section className={css(navigationBody)}>
					{navigationLists.map(navigation => (
						<DrawerNavigation key={navigation.title} {...navigation} />
					))}
				</section>
				<ProfileBadge
					profileIcon="/mock/akashi.png"
					name={name}
					isOpen={isOpen}
					preload={!isLoggedIn}
				/>
				{/* <ProfileBadge
					profileIcon={profile}
					name={name}
					isOpen={isOpen}
					preload={!isLoggedIn}
				/> */}
			</aside>
		</Fragment>
	)
})

export default connect(mapStateToProps, null)(Sidebar)
