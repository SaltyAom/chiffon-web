import { useState, useEffect } from "react"

import { connect } from "react-redux"

import Card from "components/common/card"
import Detail from "components/common/card/detail"

import {
	getCollection,
	getCache,
	getUpdate,
	getItem,
	getDate
} from "libs/connectData"

import { css } from "libs/aphrodite"
import { history as historyStyle, title } from "./styles"

import THistory, {
	IHistoryConnectProps,
	IHistoryConnectDispatch,
	IHistoryOwnProps
} from "./types"

const mapStateToProps = (
	state,
	ownProps: IHistoryOwnProps
): IHistoryConnectProps => ({
	props: ownProps
})

const mapDispatchToProps = (dispatch): IHistoryConnectDispatch => ({
	dispatch: {
		displayOnWorkspace: collection =>
			dispatch({
				type: "DISPLAY_ON_WORKSPACE",
				payload: {
					display: collection
				}
			})
	}
})

const History: THistory = ({ props, dispatch }) => {
	let { date, withPreload = false } = props,
		{ displayOnWorkspace } = dispatch

	let [history, updateHistory] = useState(undefined)

	useEffect(() => {
		date !== "this week"
			? loadData(getDate(new Date(transformDate(date))))
			: loadDataFromWeek(new Date(transformDate(date)))

		getUpdate("2019-12-19", collection => onUpdate(collection))
	}, [])

	const transformDate = dateString => {
		let date
		switch (dateString) {
			case "today":
				return (date = new Date().getTime())

			case "yesterday":
				date = new Date()
				return date.setDate(date.getDate() - 1)

			case "this week":
				return (date = new Date().getTime())

			default:
				return dateString
		}
	}

	const onUpdate = collection => {}

	const loadData = async date => {
		let history = await getCollection(date),
			willBeDisplay = []

		history.docs.map(snapshot => willBeDisplay.push(snapshot.data()))

		updateHistory(willBeDisplay)
	}

	const loadDataFromWeek = async targetDate => {
		let willBeDisplay = []

		await Array.apply(undefined, new Array(7)).map(async (_, index) => {
			let date = new Date(targetDate)
			date.setDate(date.getDate() - (index + 1))

			let collection = await getCollection(getDate(date))

			if(!collection.empty)
				await collection.docs.map(async snapshot => {
					let data = await snapshot.data()
					willBeDisplay.push(data)
					updateHistory(willBeDisplay)
				})
		})
	}

	if (typeof history === "undefined")
		if (withPreload)
			return (
				<section className={css(historyStyle)}>
					{typeof date === "string" && date === "today" ? (
						<h4 className={css(title)}>{date}</h4>
					) : null}
					<Card preload />
					<Card preload />
					<Card preload />
				</section>
			)
		else return null

	console.log(date, history)

	return (
		<section className={css(historyStyle)}>
			{typeof date === "string" && date === "today" || date === "this week" ? (
				<h4 className={css(title)}>{date}</h4>
			) : null}
			{history.length === 0 ? (
				date === "today" ? (
					<Card asDiv>
						<Detail
							subHeader="There's no record for today."
							currency=""
						>
							:)
						</Detail>
					</Card>
				) : null
			) : (
				history.map(collection => (
					<Card onClick={() => displayOnWorkspace(collection)}>
						<Detail
							subHeader={`${
								collection.item.name
							} เมื่อ ${new Date(
								collection.time
							).toLocaleTimeString()}`}
							currency={collection.transaction.currency}
						>
							{collection.transaction.amount}
						</Detail>
					</Card>
				))
			)}
		</section>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
