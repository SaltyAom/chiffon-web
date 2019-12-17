import { FC, memo } from "react"

import Link from "next/link"

import { css } from "libs/aphrodite"
import { link, __isActive } from "./styles"

import TSideLink from "./types"

const SideLink: TSideLink = memo(({ title, Icon, href, isActive }) => (
	<Link href={href}>
		<a className={isActive ? css(link, __isActive) : css(link)}>
			{Icon}
            <span>{title}</span>
		</a>
	</Link>
))

export default SideLink
