import { create } from 'libs/aphrodite'

const detailStyle = create({
    detail: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    subHeader: {
        color: "var(--fade)",
        fontSize: "14px"
    },
    currency: {
        color: "var(--primary-400)",
        fontSize: "16px",
        fontWeight: 700,
        margin: "0 0 0 8px"
    },
    header: {
        color: "var(--primary-600)",
        fontSize: "48px",
        fontWeight: 700,
        margin: "0 0 2px 0"
    }
})

export const { detail, currency, subHeader, header } = detailStyle
export default detailStyle