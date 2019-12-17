import { memo } from "react"

import MenuIcon from "components/icon/menu"

import { css } from "libs/aphrodite"
import { headerTools, pageName, navigation, navigationIcon } from "./styles"

import THeaderTools from "./types"

const HeaderTools: THeaderTools = memo(({ name }) => (
	<aside className={css(headerTools)}>
		<button className={css(navigation)}>
			<MenuIcon className={css(navigationIcon)} color="var(--fade)" />
		</button>
		<h1 className={css(pageName)}>{name}</h1>
	</aside>
))

export default HeaderTools
