import { Fragment, useState, useEffect } from "react"

import Card from "components/common/card"
import Detail from "components/common/card/detail"

import { init, getCollection, getCache, getUpdate } from "libs/connectData"

import { css } from "libs/aphrodite"
import { history as historyStyle } from './styles'

const History = () => {
	let [history, updateHistory] = useState(undefined)

	useEffect(() => {
        loadData()
        getUpdate("2019-12-19", (collection) => onUpdate(collection))
    }, [])
    
    const onUpdate = (collection) => {
    }

	const loadData = async () => {
		let history = await getCache("2019-12-19"),
            willBeDisplay = []
    
		history.docs.map(snapshot => willBeDisplay.push(snapshot.data()))
        updateHistory(willBeDisplay)
	}

	if(typeof history === "undefined")
		return (
			<section className={css(historyStyle)}>
				Today
				<Card preload />
				<Card preload />
				<Card preload />
			</section>
		)

	return (
		<section className={css(historyStyle)}>
			Today
			{history.map(collection => (
				<Card>
					<Detail
						subHeader={`${collection.item.name} เมื่อ ${
							new Date(collection.time).toLocaleTimeString()
						}`}
						currency={collection.transaction.currency}
					>
						{collection.transaction.amount}
					</Detail>
				</Card>
			))}
		</section>
	)
}

export default History
