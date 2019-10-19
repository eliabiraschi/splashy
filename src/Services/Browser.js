/**
 * addToStorage
 * @param {string} key the key to use for representing the values in the local storage
 * @param {any} value any value to store
 * @return {void}
 */
export const addToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

/**
 * getFromStorage
 * @param {string} key the key used to save the data to the local storage
 * @return {void}
 */
export const getFromStorage = key => JSON.parse(localStorage.getItem(key))
