import { memo } from 'react'

import { css } from 'libs/aphrodite'
import { workspace as workspaceStyle, area, cardArea, workspaceArea } from './styles'

import TWorkspace from './types'

const Workspace: TWorkspace = memo(({ children, workspace }) => (
    <section className={css(workspaceStyle)}>
        <aside className={css(area, cardArea)}>
            {children}
        </aside>
        <article className={css(area, workspaceArea)}>
            {workspace}
        </article>
    </section>
))

export default Workspace