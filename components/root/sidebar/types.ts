import { FC } from 'react'

import IDrawerStore from 'stores/reducers/drawer/types'

export interface IDrawerConnectProps {
    store: IDrawerStore
}

export interface IDrawer {
    store: IDrawerStore
}

type TDrawer = FC<IDrawer>
export default TDrawer