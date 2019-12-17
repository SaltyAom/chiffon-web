export interface IToggleDrawer {
    type: "TOGGLE_DRAWER"
}

export type TDrawerActions = IToggleDrawer

export default interface IOrderStore {
    isOpen: boolean
}