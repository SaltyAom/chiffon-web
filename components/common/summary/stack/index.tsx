import { useState, useLayoutEffect } from "react"

import { connect } from "react-redux"

import Card from "../card"

import Spent from "../body/spent"
import Amount from "../body/amount"

import { isServer } from 'libs/helpers'

import {
	stackWrapper,
	__stackWrapper_isOpen,
	stackInnerWrapper,
	stackBody,
	secondStacked,
	thirdStacked,
	ghostStacked
} from "./styles"

import {
	__secondStacked_moving_out,
	__thirdStacked_moving_out,
	__fourthStacked_moving_out,
	__fifthStacked_moving_out,
	__secondStacked_moving_in,
	__thirdStacked_moving_in,
	__fourthStacked_moving_in,
	__fifthStacked_moving_in
} from './motion'

import TSummaryStack, {
	ISummaryConnectStore,
	ISummaryStackConnectDispatch
} from "./types"

const mapStateToProps = (state): ISummaryConnectStore => ({
	store: state.stack
})

const mapDispatchToProps = (dispatch): ISummaryStackConnectDispatch => ({
	dispatch: {
		toggleStack: () =>
			dispatch({
				type: "TOGGLE_STACK"
			})
	}
})

const StackCard: TSummaryStack = ({ store, dispatch }) => {
	let { isStack } = store,
		{ toggleStack } = dispatch

	let [isCalculating, setCalculation] = useState(false),
		[isInitial, setInitial] = useState(true)

	/**
	 * ? useLayoutEffect will compute anything in callback before render.
	 * ? useLayoutEffect doesn't work on server-side rendering.
	 */
	if(!isServer)
		useLayoutEffect(() => {
			if(isInitial) return setInitial(false)

			setCalculation(true)
			setTimeout(() => setCalculation(false), 600)
		}, [isStack])

	const handleStack = () => !isCalculating && toggleStack()

	// Move out of stack
	if (isCalculating && isStack)
		return (
			<Card
				className={stackWrapper}
				wrapperClassName={stackInnerWrapper}
				noMark
				onClick={() => handleStack()}
			>
				<Card className={stackBody}>
					<Spent detail="Is spent on today" currency="฿">
						90
					</Spent>
				</Card>
				<Card className={[secondStacked, __secondStacked_moving_out]}>
					<Amount>5</Amount>
				</Card>
				<Card className={[thirdStacked, __thirdStacked_moving_out]}>
					<Spent detail="You have spent over 7 days" currency="฿">
						120
					</Spent>
				</Card>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fourthStacked_moving_out
					]}
				/>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fifthStacked_moving_out
					]}
				/>
			</Card>
		)

	// Moving back to stack
	if (isCalculating && !isStack)
		return (
			<Card
				className={stackWrapper}
				wrapperClassName={stackInnerWrapper}
				noMark
				onClick={() => handleStack()}
			>
				<Card className={stackBody}>
					<Spent detail="Is spent on today" currency="฿">
						90
					</Spent>
				</Card>
				<Card className={[secondStacked, __secondStacked_moving_in]}>
					<Amount>5</Amount>
				</Card>
				<Card className={[thirdStacked, __thirdStacked_moving_in]}>
					<Spent detail="You have spent over 7 days" currency="฿">
						120
					</Spent>
				</Card>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fourthStacked_moving_in
					]}
				/>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fifthStacked_moving_in
					]}
				/>
			</Card>
		)

	if (isStack)
		return (
			<Card
				className={[stackWrapper, stackInnerWrapper]}
				wrapperClassName={__stackWrapper_isOpen}
				noMark
				onClick={() => toggleStack()}
			>
				<Card>
					<Spent detail="Is spent on today" currency="฿">
						90
					</Spent>
				</Card>
				<Card>
					<Amount>5</Amount>
				</Card>
				<Card>
					<Spent detail="You have spent over 7 days" currency="฿">
						120
					</Spent>
				</Card>
				<Card />
				<Card />
			</Card>
		)

	return (
		<Card className={stackWrapper} noMark onClick={() => handleStack()}>
			<Card className={stackBody}>
				<Spent detail="Is spent on today" currency="฿">
					90
				</Spent>
			</Card>
			<Card className={secondStacked} />
			<Card className={thirdStacked} />
		</Card>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(StackCard)
