export interface IToggleStack {
    type: "TOGGLE_STACK"
}

export type TStackActions = IToggleStack

export default interface IStackStore {
    isStack: boolean
}