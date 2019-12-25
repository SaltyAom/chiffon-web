import { Fragment } from "react"

import { connect } from "react-redux"

import { css } from "libs/aphrodite"
import {
	header,
	title,
	subTitle,
	price,
	priceCard,
	currency,
	detail,
	cardDetail,
	expense,
	cardSubDetail,
    cardSubTitle
} from "./styles"

import { getDate, getTime } from "libs/connectData"

import TWorkArea, { IWorkAreaConnectStore } from "./types"

const mapStateToProps = (state): IWorkAreaConnectStore => ({
	store: state.workspace
})

const mapDispatchToProps = null

const WorkArea: TWorkArea = ({ store }) => {
	let { display } = store

	if (typeof display === "undefined") return null

	let { item, time, transaction } = display

	return (
		<Fragment>
			{console.log(display)}
			<header className={css(header)}>
				<h1 className={css(title)}>{item.name}</h1>
				<h2 className={css(subTitle)}>ประเภท: {item.subType}</h2>
			</header>
			<section className={css(detail)}>
				<article className={css(priceCard)}>
					<h3 className={css(price)}>{transaction.amount}</h3>
					<span className={css(currency)}>
						{transaction.currency}
					</span>
				</article>
				<footer className={css(cardDetail)}>
					<p className={css(cardSubTitle)}>4/8 items in the day.</p>
					<p className={css(cardSubDetail)}>
						{new Date(time).toLocaleDateString()}{" "}
						<span style={{marginLeft: "8px"}}>{getTime(new Date(time))}</span>
					</p>
					<button className={css(expense)}>Expense</button>
				</footer>
			</section>
		</Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkArea)
