export const isServer = typeof window === "undefined"

export const isArrayBlank = (array: []) => array.length === 0