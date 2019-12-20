import { create } from "libs/aphrodite"

import { smallDrawerBreakpoint } from "libs/styleBreakpoints"

const profileBadegStyle = create({
	profile: {
		appearance: "none",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		padding: "4px",
		backgroundColor: "transparent",
		border: 0,
		borderRadius: "8px",
		transition: "background-color .2s ease-out",
		cursor: "pointer",
		outline: "none",
		":hover, :focus": {
			transform: "scale(1)",
			backgroundColor: "var(--primary-200)"
		},
		[smallDrawerBreakpoint]: {
			padding: 0,
			justifyContent: "center"
		}
	},
	__profile_isOpen: {
		[smallDrawerBreakpoint]: {
			justifyContent: "flex-start"
		}
	},
	profileFigure: {
		display: "block",
		width: "40px",
		height: "40px",
		margin: 0,
		borderRadius: "50%"
	},
	__profileFigure_preload: {
		backgroundColor: "var(--preload)"
	},
	profileImage: {
		display: "block",
		width: "inherit",
		height: "inherit",
		borderRadius: "inheirt",
		margin: 0
	},
	profileName: {
		color: "var(--content)",
		fontSize: "18px",
		fontWeight: 400,
		margin: "0 0 0 12px",
		[smallDrawerBreakpoint]: {
			display: "none"
		}
	},
	__profileName_isOpen: {
		[smallDrawerBreakpoint]: {
			display: "block"
		}
	},
	__profileName_preload: {
		display: "block",
		width: "70%",
		height: "24px",
		backgroundColor: "var(--preload)",
		borderRadius: "4px"
	}
})

export const {
	profile,
	__profile_isOpen,
	profileFigure,
	__profileFigure_preload,
	profileImage,
	profileName,
	__profileName_isOpen,
	__profileName_preload
} = profileBadegStyle
export default profileBadegStyle
