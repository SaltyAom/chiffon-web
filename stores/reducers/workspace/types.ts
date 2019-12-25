export interface IWorkspaceDisplay {
    item: {
        name: string
        subType: string
        type: string
    }
    time: number
    transaction: {
        amount: number
        currency: string
        type: string
    }
}

export interface IDisplayOnWorkspace {
    type: "DISPLAY_ON_WORKSPACE"
    payload: {
        display: IWorkspaceDisplay
    }
}

export type TWorkspaceActions = IDisplayOnWorkspace
export default interface IWorkspaceStore {
    display: IWorkspaceDisplay | undefined
}