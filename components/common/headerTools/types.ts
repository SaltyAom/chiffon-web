import { FC } from 'react'

import { Action } from 'redux'

import { IToggleDrawer } from 'stores/reducers/drawer/types'

export interface IHeaderToolsProps {
    name: string
}

interface IHeaderToolsDispatch {
    toggleDrawer(): Action<IToggleDrawer>
}

interface IHeaderTools {
    dispatch: IHeaderToolsDispatch
    props: IHeaderToolsProps
}

export interface IHeaderToolsConnectProps {
    props: IHeaderToolsProps
}

export interface IHeaderToolsConnectDispatch {
    dispatch: IHeaderToolsDispatch
}

type THeaderTools = FC<IHeaderTools>
export default THeaderTools