import { create } from "libs/aphrodite"

const stackStyle = create({
	stackWrapper: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		height: "120px",
		padding: 0,
		boxShadow: 0,
		transition: "transform .375s ease-out, height .55s ease-out",
		":active, :focus": {
			transform: "scale(.95)"
		}
	},
	__stackWrapper_isOpen: {
		height: "680px",
		margin: 0
	},
	stackInnerWrapper: {
		height: "120px",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: 'flex-start',
		margin: 0,
	},
	__stackInnerWrapper_isOpen: {
		flexDirection: "column",
		height: "680px"
	},
	stackBody: {
		margin: 0
	},
	secondStacked: {
		position: "absolute",
		zIndex: -100,
		bottom: "-24px",
		transform: "scale(.9)",
		opacity: 0.8
	},
	thirdStacked: {
		position: "absolute",
		zIndex: -200,
		bottom: "-36px",
		transform: "scale(.85)",
		opacity: 0.6
	},
	ghostStacked: {
		boxShadow: 0
	}
})

export const {
	stackWrapper,
	__stackWrapper_isOpen,
	stackInnerWrapper,
	__stackInnerWrapper_isOpen,
	stackBody,
	secondStacked,
	thirdStacked,
	ghostStacked
} = stackStyle
export default stackStyle
