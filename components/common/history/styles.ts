import { create } from 'libs/aphrodite'

const historyStyle = create({
    history: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        margin: "8px 0"
    },
    title: {
        color: "var(--content)",
        fontSize: "18px",
        fontWeight: "normal",
        textTransform: "capitalize",
        margin: 0
    }
})

export const { history, title } = historyStyle
export default historyStyle