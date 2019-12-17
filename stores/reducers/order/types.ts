export type TOrderOptions = "date" | "food"

export interface IUpdateOrder {
    type: "UPDATE_ORDER"
    payload: {
        orderBy: TOrderOptions
    }
}

export type TOrderActions = IUpdateOrder

export default interface IOrderStore {
    orderBy: TOrderOptions
}