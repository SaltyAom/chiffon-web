import { create } from 'libs/aphrodite'

const authenticationStyle = create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "280px",
        height: "100vh",
        margin: "auto",
        backgroundColor: "var(--background)"
    },
    googleIcon: {
        width: "48px",
        height: "48px",
        margin: "0 4px 0 0",
        padding: "12px"
    },
    withGoogle: {
        appearance: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: "2px 16px",
        fontSize: "18px",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: "4px",
        backgroundColor: "var(--root)",
        border: "1px solid #ccc",
        boxShadow: "0 1px 2px rgba(0,0,0, .2)",
        transition: "box-shadow .15s ease-out",
        userSelect: "none",
        touchAction: "manipulation",
        outline: "none",
        cursor: "pointer",
        ":hover": {
            boxShadow: "0 4px 8px rgba(0,0,0, .2)"
        },
        ":focus": {
            boxShadow: "0 4px 8px rgba(0,0,0, .2)"
        },
        ":active": {
            boxShadow: "0 1px 2px rgba(0,0,0, .2)"
        }
    }
})

export const { container, googleIcon, withGoogle } = authenticationStyle
export default authenticationStyle