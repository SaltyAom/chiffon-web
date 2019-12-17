import { Fragment, memo } from "react"

import { css } from "libs/aphrodite"
import { summaryCard, mark, wrapper } from "./styles"

import TSummaryCard from "./types"

const SummaryCard: TSummaryCard = memo(
	({ className, children, noMark = false }) => (
		<div
			className={
				className ? css(summaryCard, className) : css(summaryCard)
			}
		>
			{noMark ? (
				<div className={css(wrapper)} style={{ padding: 0 }}>
					{children}
				</div>
			) : (
				<Fragment>
					<div className={css(mark)} />
					<div className={css(wrapper)}>{children}</div>
				</Fragment>
			)}
		</div>
	)
)

export default SummaryCard
