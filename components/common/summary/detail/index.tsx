import { memo } from "react"

import { css } from "libs/aphrodite"
import {
	detail,
	header,
	subHeader as subHeaderStyle,
	currency as currencyStyle
} from "./styles"

import TSummaryDetail from "./types"

const SummaryDetail: TSummaryDetail = memo(
	({ currency, subHeader, children }) => (
		<div className={css(detail)}>
			<h2 className={css(header)}>
				{children}
				<span className={css(currencyStyle)}>{currency}</span>
			</h2>
			<span className={css(subHeaderStyle)}>{subHeader}</span>
		</div>
	)
)

export default SummaryDetail
