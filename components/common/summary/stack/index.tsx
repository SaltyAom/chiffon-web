import { memo } from "react"

import Card from "../card"

import Spent from "../body/spent"

import { stackWrapper, stackBody, secondStacked, thirdStacked } from "./styles"

const StackCard = memo(() => (
	<Card className={stackWrapper} noMark>
		<Card className={stackBody}>
			<Spent />
		</Card>
		<Card className={secondStacked} />
		<Card className={thirdStacked} />
	</Card>
))

export default StackCard
