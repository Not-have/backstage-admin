/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: any) {
    return /^(https?:|mailto:|tel:)/.test(path)
}