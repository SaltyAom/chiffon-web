import { create } from 'libs/aphrodite'

import { smallDrawerBreakpoint, drawerBreakpoint } from 'libs/styleBreakpoints'

const historyStyle = create({
    history: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        [smallDrawerBreakpoint]: {
            width: "50%"
        },
        [drawerBreakpoint]: {
            width: "33.33%"
        }
    }
})

export const { history } = historyStyle
export default historyStyle