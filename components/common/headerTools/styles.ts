import { create } from 'libs/aphrodite'

const headerToolsStyle = create({
    headerTools: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        margin: "15px 0"
    },
    pageName: {
        fontSize: "18px",
        color: "var(--content)",
        margin: "0 0 0 10px",
        fontWeight: 400
    },
    navigation: {
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