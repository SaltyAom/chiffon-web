import IUserStore, { TUserActions } from './types'

const initUser: IUserStore = {
    isLoggedIn: false,
    name: undefined,
    email: undefined,
    profile: undefined
}

const user = (state: IUserStore = initUser, action: TUserActions) => {
    switch(action.type){
        case "UPDATE_USER":
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true
            }

        case "RESET_USER":
            return initUser

        default:
            return state
    }
}

export default user