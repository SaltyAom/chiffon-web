export interface IUpdateUser {
    type: "UPDATE_USER",
    payload: {
        name: string
        email: string
        profile: string
    }
}

export interface IResetUser {
    type: "RESET_USER"
}

export type TUserActions = IUpdateUser | IResetUser
export default interface IUserStore {
    isLoggedIn: boolean
    name: string | undefined
    email: string | undefined
    profile: string | undefined
}