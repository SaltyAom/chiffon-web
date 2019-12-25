import { create } from "libs/aphrodite"
import { shadow } from "libs/styleBreakpoints"

const appearKeyframes = {
    "from": {
        opacity: 0,
        transform: "translateY(20px)"
    }
}

const workAreaStyle = create({
	header: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		width: "100%",
        margin: "0 0 20px 0",
        animationName: [appearKeyframes],
        animationDuration: ".3s",
        animationIterationCount: 1
	},
	title: {
		fontSize: "48px",
		color: "var(--content)",
		margin: 0
	},
	subTitle: {
		fontSize: "18px",
		color: "var(--fade)",
		margin: "12px 0 0 0",
		fontWeight: 400
	},
	priceCard: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
        width: "160px",
        height: "160px",
		borderRadius: "8px",
		backgroundColor: "var(--root)",
        boxShadow: shadow,
        animationName: [appearKeyframes],
        animationDuration: ".45s",
        animationIterationCount: 1
	},
	price: {
		width: "100%",
		fontSize: "48px",
		color: "var(--primary-600)",
		textAlign: "center",
		margin: "8px 0"
	},
	currency: {
		fontSize: "14px",
        color: "var(--fade)",
        marginLeft: "8px",
	},
	cardDetail: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "16px 0 0 28px",
        height: "160px",
        animationName: [appearKeyframes],
        animationDuration: ".6s",
        animationIterationCount: 1
    },
    expense: {
        appearance: "none",
        display: "block",
        textAlign: "center",
        fontSize: "18px",
        color: "var(--primary-600)",
        fontWeight: 900,
        padding: "4px 8px",
        border: 0,
        backgroundColor: "transparent",
        borderRadius: "4px",
        outline: "none",
        transition: "background-color .15s ease-out",
        cursor: "pointer",
        ":hover": {
            backgroundColor: "var(--primary-200)",
            boxShadow: 0
        },
        ":focus": {
            backgroundColor: "var(--primary-200)",
            transform: "scale(1)",
            boxShadow: 0
        }
    },
    detail: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        margin: "24px 0"
    },
    cardSubTitle: {
        color: "var(--content)",
        fontSize: "21px",
        fontWeight: "bold",
        margin: 0
    },
    cardSubDetail: {
        color: "var(--fade)",
        fontSize: "16px",
        margin: "0 0 32px 0"
    }
})

export const {
	header,
	title,
	subTitle,
	price,
	priceCard,
	currency,
    cardDetail,
    expense,
    detail,
    cardSubTitle,
    cardSubDetail
} = workAreaStyle
export default workAreaStyle
