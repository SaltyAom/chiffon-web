import { Fragment, memo } from "react"

import { css } from "libs/aphrodite"
import {
	card,
	mark,
	wrapper,
	preloadCard,
	preloadInfo,
	preloadSubInfo
} from "./styles"

import TCard from "./types"

const Card: TCard = memo(
	({
		className,
		children,
		noMark = false,
		onClick = () => null,
		wrapperClassName,
		preload = false
	}) =>
		preload ? (
			<div className={className ? css(card, className) : css(card)}>
				<div className={css(mark)} />
				<div className={css(wrapper, preloadCard)}>
					<div className={css(preloadInfo)} />
					<div className={css(preloadSubInfo)} />
				</div>
			</div>
		) : (
			<div
				className={className ? css(card, className) : css(card)}
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

export default Card
