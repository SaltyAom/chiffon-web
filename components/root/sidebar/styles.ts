import { create } from 'libs/aphrodite'

import { drawerBreakpoint, smallDrawerBreakpoint } from 'libs/styleBreakpoints'

const drawerStyle = create({
    drawer: {
        display: "flex",
        flexDirection: "column",
        width: "0",
        height: "100vh",
        padding: "32px 0",
        backgroundColor: "var(--background)",
        boxShadow: "inset -15px 0 30px rgba(0,0,0,.03), inset -5px 0 15px rgba(0,0,0,.01)",
        overflow: "hidden",
        transition: "width .15s ease-out, padding .15s ease-out",
        [drawerBreakpoint]: {
            width: "240px",
            padding: "32px 32px"
        },
        [smallDrawerBreakpoint]: {
            width: "92px",
            padding: "20px"
        }
    },
    __drawer_isOpen: {
        width: "240px",
        padding: "32px 24px",
        [smallDrawerBreakpoint]: {
            width: "240px",
            padding: "20px 24px"
        }
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
    }
})

export const { drawer, __drawer_isOpen, icon, __icon_isOpen } = drawerStyle
export default drawerStyle