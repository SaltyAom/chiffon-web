import IWorkspaceStore, { TWorkspaceActions } from './types'

const initWorkspace: IWorkspaceStore = {
    display: undefined
}

const workspace = (state: IWorkspaceStore = initWorkspace, action: TWorkspaceActions) => {
    switch(action.type){
        case "DISPLAY_ON_WORKSPACE":
            return {
                ...state,
                display: action.payload.display
            }
        default:
            return state
    }
}

export default workspace