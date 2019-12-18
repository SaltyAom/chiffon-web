import { FC, memo, Fragment } from 'react'

import Drawer from "components/root/drawer"

import { css } from 'libs/aphrodite'
import { main } from './styles'

import IRootLayout from './types'

const RootLayout:FC<IRootLayout> = memo(({ children }) => (
    <Fragment>
        <Drawer />
        <main className={css(main)}>
            {children}
        </main>
    </Fragment>
))

export default RootLayout