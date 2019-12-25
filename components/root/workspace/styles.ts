import { create } from 'libs/aphrodite'

import { smallDrawerBreakpoint, drawerBreakpoint } from 'libs/styleBreakpoints'

const workspaceStyle = create({
    workspace: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: "auto"
    },
    area: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "0 25px 0 0"
    },
    cardArea: {
        width: "100%",
        [smallDrawerBreakpoint]: {
            width: "300px"
        },
        [drawerBreakpoint]: {
            width: "360px"
        }
    },
    workspaceArea: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "100%",
        padding: "25px"
    }
})

export const { workspace, area, cardArea, workspaceArea } = workspaceStyle
export default workspaceStyle