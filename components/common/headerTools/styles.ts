import { create } from 'libs/aphrodite'

import { drawerBreakpoint } from 'libs/styleBreakpoints'

const headerToolsStyle = create({
    headerTools: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        margin: "16px 0"
    },
    pageName: {
        fontSize: "18px",
        color: "var(--content)",
        margin: "0 0 0 10px",
        fontWeight: 400,
        [drawerBreakpoint]: {
            margin: 0
        }
    },
    navigation: {
        display: "block",
        appearance: "none",
        width: "40px",
        height: "40px",
        padding: 0,
        borderRadius: "8px",
        border: 0,
        backgroundColor: "transparent",
        outline: "none",
        transition: "background-color .15s ease-out",
        ":hover": {
            backgroundColor: "var(--mist)"
        },
        [drawerBreakpoint]: {
            display: "none"
        }
    },
    navigationIcon: {
        width: "inherit",
        height: "inherit",
        padding: "4px"
    }
})

export const { headerTools, pageName, navigation, navigationIcon } = headerToolsStyle
export default headerToolsStyle