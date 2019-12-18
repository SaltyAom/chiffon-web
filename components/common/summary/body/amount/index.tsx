import { Fragment, memo } from "react"

import SummaryDetail from "../../detail"

import TAmountSummary from './types'

const AmountSummary: TAmountSummary = memo(({ children }) => (
	<Fragment>
		<SummaryDetail subHeader="You have spent on today" currency="Items">
			{ children }
		</SummaryDetail>
		<div></div>
	</Fragment>
))

export default AmountSummary