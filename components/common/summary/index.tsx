import { memo } from 'react'

import SummaryCard from './card'
import StackCard from "./stack"

import { css } from 'libs/aphrodite'
import { container } from './styles'

const Summary = memo(() => (
    <section className={css(container)}>
        <StackCard />
    </section>
))

export default Summary