import { create } from 'libs/aphrodite'

const SideLinkStyle = create({
    link: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        margin: "4px 0",
        padding: "12px 16px",
        color: "var(--content)",
        fontSize: "16px",
        textDecoration: "none",
        textTransform: "capitalize",
        borderRadius: "8px",
        backgroundColor: "transparent",
        transition: "background-color .15s ease-out, box-shadow .15s ease-out",
        outline: "none",
        ":hover, :focus": {
            backgroundColor: "var(--primary-200)",
            boxShadow: "0 4px 12px var(--primary-100)",
        }
    },
    __isActive: {
        color: "#fff",
        background: "linear-gradient(45deg, var(--primary-700), var(--primary-500))",
        boxShadow: "0 4px 12px var(--primary-400)",
        ":hover": {
            background: "linear-gradient(45deg, var(--primary-700), var(--primary-500))",
            boxShadow: "0 4px 12px var(--primary-400)"
        }
    }
})

export const { link, __isActive } = SideLinkStyle
export default SideLinkStyle