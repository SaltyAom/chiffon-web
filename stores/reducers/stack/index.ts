import IStackStore, { TStackActions } from './types'

const initStack: IStackStore = {
    isStack: false
}

const stack = (state: IStackStore = initStack, action: TStackActions) => {
    switch(action.type){
        case "TOGGLE_STACK":
            return {
                ...state,
                isStack: !state.isStack
            }
        default:
            return state
    }
}

export default stack