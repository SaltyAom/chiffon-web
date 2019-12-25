import { useState, useEffect, useLayoutEffect } from "react"

import { connect } from "react-redux"

/**
 * ? Required components Card
 */
import Card from "components/common/card"

import Spent from "../body/spent"
import Amount from "../body/amount"

import { isServer, isArrayBlank } from "libs/helpers"
import { getCollection, getDate } from "libs/connectData"

import {
	stackWrapper,
	__stackWrapper_isOpen,
	stackInnerWrapper,
	__stackInnerWrapper_isOpen,
	stackBody,
	__stackBody_isOpen,
	secondStacked,
	thirdStacked,
	ghostStacked
} from "./styles"

import {
	__stackWrapper_expanded,
	__secondStacked_moving_out,
	__thirdStacked_moving_out,
	__fourthStacked_moving_out,
	__fifthStacked_moving_out,
	__secondStacked_moving_in,
	__thirdStacked_moving_in,
	__fourthStacked_moving_in,
	__fifthStacked_moving_in
} from "./motion"

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

	let [usage, updateUsage] = useState(undefined),
		[usageCount, updateusageCount] = useState(undefined),
		[currency, updateCurrency] = useState(undefined)

	useEffect(() => {
		fetchInitialCollection()
	}, [])

	const fetchInitialCollection = async () => {
		let history = await getCollection(getDate(new Date()))

		let temporaryData = history.docs.map(collection => collection.data())

		updateUsage(
			!isArrayBlank(temporaryData)
				? temporaryData.reduce(
						(collection, nextCollection) =>
							collection.transaction.amount +
							nextCollection.transaction.amount
				  )
				: 0
		)

		if(!isArrayBlank(temporaryData))
			updateCurrency(temporaryData[0].transaction.currency)
	
		updateusageCount(temporaryData.length)
	}

	/**
	 * ? useLayoutEffect will compute anything in callback before render.
	 * ? useLayoutEffect doesn't work on server-side rendering.
	 */
	if (!isServer)
		useLayoutEffect(() => {
			if (isInitial) return setInitial(false)

			setCalculation(true)
			setTimeout(() => setCalculation(false), 600)
		}, [isStack])

	const handleStack = () => !isCalculating && toggleStack()

	// Move out of stack
	if (isCalculating && isStack)
		return (
			<Card
				className={[stackWrapper, __stackWrapper_expanded]}
				wrapperClassName={stackInnerWrapper}
				noMark
				asDiv
				onClick={() => handleStack()}
			>
				<Card
					className={stackBody}
					preload={typeof usage === "undefined"}
				>
					<Spent detail="Is spent on today" currency={currency}>
						{usage}
					</Spent>
				</Card>
				<Card
					className={[secondStacked, __secondStacked_moving_out]}
					preload={typeof usage === "undefined"}
				>
					<Amount>{usageCount}</Amount>
				</Card>
				<Card
					className={[thirdStacked, __thirdStacked_moving_out]}
					preload={typeof usage === "undefined"}
				></Card>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fourthStacked_moving_out
					]}
					preload={typeof usage === "undefined"}
				/>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fifthStacked_moving_out
					]}
					preload={typeof usage === "undefined"}
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
				asDiv
				onClick={() => handleStack()}
			>
				<Card
					className={stackBody}
					preload={typeof usage === "undefined"}
				>
					<Spent detail="Is spent on today" currency={currency}>
						{usage}
					</Spent>
				</Card>
				<Card
					className={[secondStacked, __secondStacked_moving_in]}
					preload={typeof usage === "undefined"}
				>
					<Amount>{usageCount}</Amount>
				</Card>
				<Card
					className={[thirdStacked, __thirdStacked_moving_in]}
					preload={typeof usage === "undefined"}
				></Card>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fourthStacked_moving_in
					]}
					preload={typeof usage === "undefined"}
				/>
				<Card
					className={[
						thirdStacked,
						ghostStacked,
						__fifthStacked_moving_in
					]}
					preload={typeof usage === "undefined"}
				/>
			</Card>
		)

	if (isStack)
		return (
			<Card
				className={[stackWrapper, __stackWrapper_isOpen]}
				wrapperClassName={__stackInnerWrapper_isOpen}
				noMark
				asDiv
				onClick={() => toggleStack()}
				preload={typeof usage === "undefined"}
			>
				<Card preload={typeof usage === "undefined"}>
					<Spent detail="Is spent on today" currency={currency}>
						{usage}
					</Spent>
				</Card>
				<Card preload={typeof usage === "undefined"}>
					<Amount>{usageCount}</Amount>
				</Card>
				<Card preload={typeof usage === "undefined"} />
				<Card preload={typeof usage === "undefined"} />
				<Card preload={typeof usage === "undefined"} />
			</Card>
		)

	return (
		<Card
			className={stackWrapper}
			noMark
			asDiv
			onClick={() => handleStack()}
		>
			<Card
				className={[stackBody, __stackBody_isOpen]}
				preload={typeof usage === "undefined"}
			>
				<Spent detail="Is spent on today" currency={currency}>
					{usage}
				</Spent>
			</Card>
			<Card
				className={secondStacked}
				preload={typeof usage === "undefined"}
				asDiv
			/>
			<Card
				className={thirdStacked}
				preload={typeof usage === "undefined"}
				asDiv
			/>
		</Card>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(StackCard)
