import { create } from 'libs/aphrodite'

import { drawerBreakpoint, smallDrawerBreakpoint, shadow } from 'libs/styleBreakpoints'

const drawerStyle = create({
    drawer: {
        flex: "0 0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "0",
        height: "100vh",
        padding: "32px 0 8px 0",
        backgroundColor: "var(--root)",
        boxShadow: `inset 0 0.625rem 3.5rem 0 rgba(198,203,222,.25)`,
        overflow: "hidden",
        transition: "width .15s ease-out, padding .15s ease-out",
        [drawerBreakpoint]: {
            width: "240px",
            padding: "32px 24px 8px 24px"
        },
        [smallDrawerBreakpoint]: {
            width: "92px",
            padding: "20px 0 8px 0",
            alignItems: "center"
        }
    },
    __drawer_isOpen: {
        width: "240px",
        padding: "32px 24px 8px 24px",
        [smallDrawerBreakpoint]: {
            width: "240px",
            padding: "20px 24px 8px 24px",
            alignItems: "flex-start"
        }
    },
    __drawer_sticky: {
        position: "fixed"
    },
    icon: {
        width: "24px",
        height: "24px",
        margin: "0 4px 0 0",
        objectFit: "cover",
        [smallDrawerBreakpoint]: {
            width: "28px",
            height: "28px",    
            margin: 0
        }
    },
    __icon_isOpen: {
        [smallDrawerBreakpoint]: {
            margin: "0 4px 0 0"
        }
    },
    navigationBody: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
})

export const { drawer, __drawer_isOpen, __drawer_sticky, icon, __icon_isOpen, navigationBody } = drawerStyle
export default drawerStyle