import { create } from 'libs/aphrodite'

import { smallDrawerBreakpoint, drawerBreakpoint } from 'libs/styleBreakpoints'

const summaryStyle = create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        margin: "0 0 45px 0",
        transition: "height .55s ease-out",
        [smallDrawerBreakpoint]: {
            width: "50%"
        },
        [drawerBreakpoint]: {
            width: "33.33%"
        }
    }
})

export const { container } = summaryStyle
export default summaryStyle