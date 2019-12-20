import { FC } from 'react'

interface ICard {
    className?: any
    wrapperClassName?: any
    noMark?: boolean
    onClick?: Function
    preload?: boolean
}

type TCard = FC<ICard>
export default TCard