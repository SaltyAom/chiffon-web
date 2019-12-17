import { create } from 'libs/aphrodite'

import { drawerBreakpoint } from 'libs/styleBreakpoints'

const RootLayoutStyle = create({
    main: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        minHeight: "100vh",
        overflow: "hidden",
        padding: "10px 25px",
        [drawerBreakpoint]: {
            padding: "50px"
        }
    }
})

export const { main } = RootLayoutStyle
export default RootLayoutStyle