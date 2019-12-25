import { create } from 'libs/aphrodite'
import { shadow } from 'libs/styleBreakpoints'

const cardStyle = create({
    card: {
        appearance: "none",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        minHeight: "120px",
        margin: "8px 0",
        padding: "0 4px 0 0",
        borderRadius: "12px",
        backgroundColor: "var(--root)",
        outline: "none",
        border: 0,
        boxShadow: shadow,
        transition: "transform .15s ease-out",
        ":hover": {
            transform: "scale(1.05)"
        },
        ":focs": {
            transform: "scale(1.05)"
        },
        ":active": {
            transform: "scale(1)"
        }
    },
    wrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "8px 16px"
    },
    mark: {
        display: "block",
        width: "8px",
        height: "28px",
        backgroundColor: "var(--primary-600)",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px"
    },
    preloadCard: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    preloadInfo: {
        display: "block",
        width: "40%",
        height: "48px",
        borderRadius: "4px",
        backgroundColor: "var(--preload)"
    },
    preloadSubInfo: {
        display: "block",
        width: "70%",
        height: "16px",
        margin: "12px 0 0 0",
        borderRadius: "4px",
        backgroundColor: "var(--preload)"
    }
})

export const { card, wrapper, mark, preloadCard, preloadInfo, preloadSubInfo } = cardStyle
export default cardStyle