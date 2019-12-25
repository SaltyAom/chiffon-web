import { FC } from 'react'

import IWorkspaceStore from 'stores/reducers/workspace/types'

export interface IWorkAreaConnectStore {
    store: IWorkspaceStore
}

interface IWorkArea {
    store: IWorkspaceStore
}

type TWorkArea = FC<IWorkArea>
export default TWorkArea