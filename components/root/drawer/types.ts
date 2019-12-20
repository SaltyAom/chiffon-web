import { FC } from 'react'

import IDrawerStore from 'stores/reducers/drawer/types'
import IUserStore from 'stores/reducers/user/types'

export interface IDrawerConnectProps {
    store: {
        drawer: IDrawerStore
        user: IUserStore
    }
}

export interface IDrawer {
    store: {
        drawer: IDrawerStore
        user: IUserStore
    }
}

type TDrawer = FC<IDrawer>
export default TDrawer