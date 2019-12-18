import { Fragment, memo } from "react"

import { css } from "libs/aphrodite"
import { summaryCard, mark, wrapper } from "./styles"

import TSummaryCard from "./types"

const SummaryCard: TSummaryCard = memo(
	({
		className,
		children,
		noMark = false,
		onClick = () => null,
		wrapperClassName
	}) => (
		<div
			className={
				className ? css(summaryCard, className) : css(summaryCard)
			}
			onClick={() => onClick()}
		>
			{noMark ? (
				<div
					className={
						wrapperClassName
							? css(wrapper, wrapperClassName)
							: css(wrapper)
					}
					style={{ padding: 0 }}
				>
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
