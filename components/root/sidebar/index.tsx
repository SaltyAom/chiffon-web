import { memo } from 'react'

import { useRouter } from "next/router"

import { css } from "aphrodite/no-important"

import SideLink from "./sideLink"

import DashboardIcon from "components/icon/dashboard"
import ChartIcon from "components/icon/chart"
import MoneyIcon from "components/icon/money"

import { aside, icon } from "./styles"

const Sidebar = memo(() => {
    let { route } = useRouter()

    let applyPath = (path, route) => ({
        href: path,
        isActive: path === route,
    }),
        applyColor = (path, route) => path === route ? { color: "#fff" } : { color: "var(--content)" }

    let navigationLists = [
        {
            title: "home",
            Icon: <DashboardIcon className={css(icon)} {...applyColor("/", route)} />,
            ...applyPath("/", route)
        },
        {
            title: "analyze",
            Icon: <ChartIcon className={css(icon)} {...applyColor("/analyze", route)} />,
            ...applyPath("/analyze", route)
        },
        {
            title: "goal",
            Icon: <MoneyIcon className={css(icon)} {...applyColor("/goal", route)} />,
            ...applyPath("/goal", route)
        }
    ]

	return (
		<aside className={css(aside)}>
            {navigationLists.map(navigation =>
                <SideLink {...navigation} />
            )}
		</aside>
	)
})

export default Sidebar
