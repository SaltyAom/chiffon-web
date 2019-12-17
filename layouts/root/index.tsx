import { FC, memo, Fragment } from 'react'

import Sidebar from "components/root/sidebar"

import { css } from 'libs/aphrodite'
import { main } from './styles'

import IRootLayout from './types'

const RootLayout:FC<IRootLayout> = memo(({ children }) => (
    <Fragment>
        <Sidebar />
        <main className={css(main)}>
            {children}
        </main>
    </Fragment>
))

export default RootLayout