import { StyleSheet } from 'aphrodite/no-important'

declare global {
    interface Window {
        __NEXT_DATA__: {
            ids: any
        }
    }
}

const rehydrateStyle = () =>
	typeof window !== "undefined" &&
    StyleSheet.rehydrate(window.__NEXT_DATA__.ids)

export default rehydrateStyle