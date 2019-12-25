import { create } from 'libs/aphrodite'

const historyStyle = create({
    history: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%"
    },
    title: {
        color: "var(--content)",
        fontSize: "18px",
        fontWeight: "normal",
        margin: 0
    }
})

export const { history, title } = historyStyle
export default historyStyle