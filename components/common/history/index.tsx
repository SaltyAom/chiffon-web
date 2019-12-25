import { useState, useEffect } from "react"

import { connect } from "react-redux"

import Card from "components/common/card"
import Detail from "components/common/card/detail"

import { getCollection, getCache, getUpdate, getItem } from "libs/connectData"

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
	let { date } = props,
		{ displayOnWorkspace } = dispatch

	let [history, updateHistory] = useState(undefined)

	useEffect(() => {
		loadData()
		getUpdate("2019-12-19", collection => onUpdate(collection))
	}, [])

	const onUpdate = collection => {}

	const loadData = async () => {
		let history = await getCache("2019-12-19"),
			willBeDisplay = []

		history.docs.map(snapshot => willBeDisplay.push(snapshot.data()))
		updateHistory(willBeDisplay)
	}

	if (typeof history === "undefined")
		return (
			<section className={css(historyStyle)}>
				<h4 className={css(title)}>Today</h4>
				<Card preload />
				<Card preload />
				<Card preload />
			</section>
		)

	return (
		<section className={css(historyStyle)}>
			<h4 className={css(title)}>Today</h4>
			{history.map(collection => (
				<Card onClick={() => displayOnWorkspace(collection)}>
					<Detail
						subHeader={`${collection.item.name} เมื่อ ${new Date(
							collection.time
						).toLocaleTimeString()}`}
						currency={collection.transaction.currency}
					>
						{collection.transaction.amount}
					</Detail>
				</Card>
			))}
		</section>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(History)