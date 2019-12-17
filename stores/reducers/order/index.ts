import IInitOrder, { TOrderActions } from "./types"

const initOrder: IInitOrder = {
    orderBy: "date"
}

const category = (state: IInitOrder = initOrder, action: TOrderActions) => {
    switch(action.type){
        case "UPDATE_ORDER":
            return {
                ...state,
                orderBy: action.payload.orderBy
            }
        default:
            return state
    }
}

export default category