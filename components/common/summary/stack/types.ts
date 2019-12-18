import { FC } from 'react'

import { Action } from 'redux'

import IStackStore, { IToggleStack } from 'stores/reducers/stack/types'

export interface ISummaryConnectStore {
    store: IStackStore
}

export interface ISummaryStackDispatch {
    toggleStack(): Action<IToggleStack>
}

export interface ISummaryStack {
    store: IStackStore
    dispatch: ISummaryStackDispatch
}

export interface ISummaryStackConnectDispatch {
    dispatch: ISummaryStackDispatch
}

type TSummaryStack = FC<ISummaryStack>
export default TSummaryStack