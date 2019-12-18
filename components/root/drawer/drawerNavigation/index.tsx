import { FC, memo } from "react"

import Link from "next/link"

import { css } from "libs/aphrodite"
import { link, __isActive, __isOpen } from "./styles"

import TSideLink from "./types"

const SideLink: TSideLink = memo(({ title, Icon, href, isActive, isOpen }) => {
	const applyState = (isActive, isOpen) => 
		isActive 
			? isOpen 
				? css(link, __isActive, __isOpen)
				: css(link, __isActive)
			: isOpen
				? css(link, __isOpen)
				: css(link)

	return (
		<Link href={href}>
			<a className={applyState(isActive, isOpen)}>
				{Icon}
				<span>{title}</span>
			</a>
		</Link>
	)
})

export default SideLink
