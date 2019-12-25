import { FC } from 'react'

import { Action } from 'redux'

import { IWorkspaceDisplay, IDisplayOnWorkspace } from 'stores/reducers/workspace/types'

export interface IHistoryOwnProps {
    date: "today" | "yesterday" | "thisWeek" | number
}

export interface IHistoryConnectProps {
    props: IHistoryOwnProps
}

export interface IHistoryDispatch {
    displayOnWorkspace(collection: IWorkspaceDisplay): Action<IDisplayOnWorkspace>
}

export interface IHistoryConnectDispatch {
    dispatch: IHistoryDispatch
}

export interface IHistory {
    props: IHistoryOwnProps
    dispatch: IHistoryDispatch
}

type THistory = FC<IHistory>
export default THistory