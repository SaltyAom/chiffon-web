import { create } from 'libs/aphrodite'

const sidebarStyle = create({
    aside: {
        display: "flex",
        flexDirection: "column",
        width: "0",
        height: "100vh",
        padding: "30px 0",
        backgroundColor: "#fff",
        boxShadow: "inset -15px 0 30px rgba(0,0,0,.03), inset -5px 0 15px rgba(0,0,0,.01)",
        overflow: "hidden",
        transition: "width .15s ease-out, padding .15s ease-out",
        "@media screen and (min-width: 568px)": {
            width: "280px",
            padding: "30px"
        }
    },
    icon: {
        width: "24px",
        height: "24px",
        margin: "0 4px 0 0",
        objectFit: "cover"
    }
})

export const { aside, icon } = sidebarStyle
export default sidebarStyle