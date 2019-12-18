import { FC } from 'react'

interface ISpendSummary {
    detail: string
    currency: string
}

type TSpendSummary = FC<ISpendSummary>
export default TSpendSummary