import { create } from "libs/aphrodite"

import { drawerBreakpoint, smallDrawerBreakpoint } from "libs/styleBreakpoints"

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
	profileImage: {
		display: "block",
		width: "48px",
		height: "48px",
		borderRadius: "inherit"
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
	}
})

export const {
	profile,
	__profile_isOpen,
	profileImage,
	profileName,
	__profileName_isOpen
} = profileBadegStyle
export default profileBadegStyle
