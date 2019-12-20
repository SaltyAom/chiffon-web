import { FC, ReactNode } from 'react'

import { Action } from 'redux'

import IUserStore, { IUpdateUser, IResetUser } from 'stores/reducers/user/types'

interface IAuthenticationDispatch {
    updateUser(updateUserParams: IUpdateUserParams): Action<IUpdateUser>
    resetUser(): Action<IResetUser>
}

interface IUpdateUserParams {
    name: string,
    email: string,
    profile: string
}

interface IAuthentication {
    store: IUserStore
    dispatch: IAuthenticationDispatch
    props: {
        children: any
    }
}

export interface IAuthenticationConnectProps {
    store: IUserStore
    props: {
        children: ReactNode
    }
}

export interface IAuthenticationConnectDispatch {
    dispatch: IAuthenticationDispatch
}

type TAuthentication = FC<IAuthentication>
export default TAuthentication