import IDrawerStore, { TDrawerActions } from "./types"

const initDrawer: IDrawerStore = {
    isOpen: false
}

const drawer = (state: IDrawerStore = initDrawer, action: TDrawerActions) => {
    switch(action.type){
        case "TOGGLE_DRAWER":
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return state
    }
}

export default drawer