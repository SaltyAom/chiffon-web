import { create } from "libs/aphrodite"

import { smallCardBreakpoint, drawerBreakpoint } from "libs/styleBreakpoints"

const workspaceStyle = create({
	workspace: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		width: "100%",
		height: "auto"
	},
	area: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: "0 25px 0 0"
	},
	cardArea: {
		width: "100%",
		[smallCardBreakpoint]: {
			width: "300px"
		},
		[drawerBreakpoint]: {
			width: "360px"
		}
	},
	workspaceArea: {
		position: "relative",
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		height: "100%",
		padding: "25px"
	},
	workspaceDisplay: {
		position: "fixed",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start"
	}
})

export const {
	workspace,
	area,
	cardArea,
	workspaceArea,
	workspaceDisplay
} = workspaceStyle
export default workspaceStyle
