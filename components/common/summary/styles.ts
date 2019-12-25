import { create } from 'libs/aphrodite'

const summaryStyle = create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        margin: "0 0 45px 0",
        transition: "height .55s ease-out"
    }
})

export const { container } = summaryStyle
export default summaryStyle