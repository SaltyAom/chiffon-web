import { create } from 'libs/aphrodite'

const summaryStyle = create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        margin: "0 0 45px 0",
        "@media screen and (min-width: 568px)": {
            width: "33.33%"
        }
    }
})

export const { container } = summaryStyle
export default summaryStyle