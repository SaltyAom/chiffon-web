import IOrderStore, { TOrderActions } from "./types"

const initOrder: IOrderStore = {
    orderBy: "date"
}

const order = (state: IOrderStore = initOrder, action: TOrderActions) => {
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

export default order