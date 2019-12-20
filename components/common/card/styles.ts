import { create } from 'libs/aphrodite'

const cardStyle = create({
    card: {
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
        boxShadow: "0 1px 2px rgba(0,0,0,.015), 0 4px 8px rgba(0,0,0,.025), 0 8px 24px rgba(0,0,0,.0325), 0 16px 40px rgba(0,0,0,.0425)",
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