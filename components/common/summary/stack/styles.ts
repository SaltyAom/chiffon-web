import { create } from 'libs/aphrodite'

const stackStyle = create({
    stackWrapper: {
        justifyContent: "center",
        padding: 0,
        boxShadow: 0,
        transition: "transform .375s ease-out",
        ":active, :focus": {
            transform: "scale(.9)"
        }
    },
    stackBody: {
        margin: 0
    },
    secondStacked: {
        position: "absolute",
        zIndex: -100,
        bottom: "-24px",
        transform: "scale(.9)",
        opacity: .8,
    },
    thirdStacked: {
        position: "absolute",
        zIndex: -200,
        bottom: "-36px",
        transform: "scale(.85)",
        opacity: .6,
    },
})

export const { stackWrapper, stackBody, secondStacked, thirdStacked } = stackStyle
export default stackStyle