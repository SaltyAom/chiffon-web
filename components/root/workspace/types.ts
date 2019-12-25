import { FC, ReactNode } from 'react'

interface IWorkspace {
    children: ReactNode
    workspace: ReactNode
}

type TWorkspace = FC<IWorkspace>
export default TWorkspace