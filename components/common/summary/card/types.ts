import { FC } from 'react'

interface ISummaryCard {
    className?: any
    wrapperClassName?: any
    noMark?: boolean
    onClick?: Function
}

type TSummaryCard = FC<ISummaryCard>
export default TSummaryCard