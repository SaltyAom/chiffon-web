import { memo } from 'react'

import { css } from 'libs/aphrodite'
import { container } from './styles'

const Summary = memo(() => (
    <section className={css(container)}>
        Hello
    </section>
))

export default Summary