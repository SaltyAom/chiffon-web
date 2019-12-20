import { Fragment, memo } from "react"

import SummaryDetail from "components/common/card/detail"

import TSpendSummary from "./types"

const SpentSummary: TSpendSummary = memo(({ children, detail, currency }) => (
	<Fragment>
		<SummaryDetail subHeader={detail} currency={currency}>
			{children}
		</SummaryDetail>
		<div></div>
	</Fragment>
))

export default SpentSummary