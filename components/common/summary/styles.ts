import { create } from 'libs/aphrodite'

const summaryStyle = create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        margin: "15px 0 45px 0"
    }
})

export const { container } = summaryStyle
export default summaryStyle