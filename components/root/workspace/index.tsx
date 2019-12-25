import { memo } from "react"

import { css } from "libs/aphrodite"
import {
	workspace as workspaceStyle,
	area,
	cardArea,
	workspaceArea,
	workspaceDisplay
} from "./styles"

import TWorkspace from "./types"

const Workspace: TWorkspace = memo(({ children, workspace }) => (
	<section className={css(workspaceStyle)}>
		<aside className={css(area, cardArea)}>{children}</aside>
		<div className={css(area, workspaceArea)}>
			<article className={css(workspaceDisplay)}>{workspace}</article>
		</div>
	</section>
))

export default Workspace
