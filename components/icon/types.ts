import { FC } from 'react'

interface IIcon {
    color: string
    className?: string
}

type TIcon = FC<IIcon>
export default TIcon