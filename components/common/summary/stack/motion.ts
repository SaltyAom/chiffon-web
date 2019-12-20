import { create } from "libs/aphrodite"

const applyMotion = ({
	start = 0,
	end,
	reversed = false,
	duration,
	secondOrThirdStack = false,
	scale = 0.9,
	opacity = 1
}) => ({
	animationName: [
		{
			from: {
				top: `${reversed ? end : start}px`,
				transform: `scale(${!secondOrThirdStack ? scale : 1})`,
				opacity: !reversed && secondOrThirdStack ? opacity : 1,
			},
			to: {
				top: `${reversed ? (secondOrThirdStack ? start : 0) : end}px`,
				transform: `scale(${
					reversed ? (secondOrThirdStack ? scale : 0.85) : 1
				})`,
				boxShadow:
					reversed && !secondOrThirdStack
						? ""
						: "rgba(0, 0, 0, 0.016) 0px 1px 2px, rgba(0, 0, 0, 0.024) 0px 4px 8px, rgba(0, 0, 0, 0.03) 0px 8px 24px, rgba(0, 0, 0, 0.043) 0px 16px 40px",
				opacity: reversed && secondOrThirdStack ? opacity : 1,
			}
		}
	],
	animationDuration: `${duration}s`,
	animationIterationCount: 1,
	top: `${reversed ? (secondOrThirdStack ? 0 : start) : end}px`,
	transform: `scale(${reversed ? (secondOrThirdStack ? scale : 0.85) : 1})`,
	opacity: reversed && secondOrThirdStack ? opacity : 1,
	boxShadow:
		reversed && !secondOrThirdStack
			? ""
			: "rgba(0, 0, 0, 0.016) 0px 1px 2px, rgba(0, 0, 0, 0.024) 0px 4px 8px, rgba(0, 0, 0, 0.03) 0px 8px 24px, rgba(0, 0, 0, 0.043) 0px 16px 40px"
})

const stackMotion = create({
	__stackWrapper_expanded: {
		height: "680px",
		backgroundColor: "transparent"
	} ,
    __secondStacked_moving_out: applyMotion({
		start: 8,
		end: 128,
		duration: 0.35,
		secondOrThirdStack: true,
		scale: 0.9,
		opacity: .8
	}),
	__thirdStacked_moving_out: applyMotion({
		start: 28,
		end: 264,
		duration: 0.425,
		secondOrThirdStack: true,
		scale: 0.85,
		opacity: .6
	}),
	__fourthStacked_moving_out: applyMotion({
		start: 0,
		end: 400,
		duration: 0.5
	}),
	__fifthStacked_moving_out: applyMotion({
		start: 0,
		end: 536,
		duration: 0.575
	}),
	__secondStacked_moving_in: applyMotion({
		start: 8,
		end: 128,
		duration: 0.35,
		reversed: true,
		secondOrThirdStack: true,
		scale: 0.9,
		opacity: .8
	}),
	__thirdStacked_moving_in: applyMotion({
		start: 28,
		end: 264,
		duration: 0.425,
		reversed: true,
		secondOrThirdStack: true,
		scale: 0.85,
		opacity: .6
	}),
	__fourthStacked_moving_in: applyMotion({
		start: 0,
		end: 400,
		duration: 0.5,
		reversed: true
	}),
	__fifthStacked_moving_in: applyMotion({
		start: 0,
		end: 536,
		duration: 0.575,
		reversed: true
	})
})

export const {
	__stackWrapper_expanded,
	__secondStacked_moving_out,
	__thirdStacked_moving_out,
	__fourthStacked_moving_out,
	__fifthStacked_moving_out,
	__secondStacked_moving_in,
	__thirdStacked_moving_in,
	__fourthStacked_moving_in,
	__fifthStacked_moving_in
} = stackMotion
export default stackMotion