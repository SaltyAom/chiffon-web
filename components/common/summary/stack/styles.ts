import { create } from "libs/aphrodite"

const stackStyle = create({
	stackWrapper: {
		justifyContent: "center",
		padding: 0,
		boxShadow: 0,
		transition: "transform .375s ease-out",
		":active, :focus": {
			transform: "scale(.95)"
		}
	},
	stackInnerWrapper: {
		margin: 0
	},
	__stackWrapper_isOpen: {
		flexDirection: "column"
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
	stackBody,
	secondStacked,
	thirdStacked,
	ghostStacked
} = stackStyle
export default stackStyle
