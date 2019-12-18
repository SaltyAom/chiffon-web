import { FC } from 'react'

interface IProfileBadge {
    profileIcon: string
    name: string
    isOpen: boolean
}

type TProfileBadge = FC<IProfileBadge>
export default TProfileBadge