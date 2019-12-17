import { FC, ReactNode } from 'react'

export interface ISideLink {
    title: string
    Icon: ReactNode
    href: string
    isActive: boolean
}

type TSideLink = FC<ISideLink>
export default TSideLink