import { FC } from 'react'

interface ICardDetail {
    currency: string
    subHeader: string
}

type TCardDetail = FC<ICardDetail>
export default TCardDetail