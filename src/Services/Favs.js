import {
  getFromStorage,
  addToStorage,
} from './Browser'

// key used to represent the favourites in the localstorage
const KEY = 'favs'

/**
 * getFavs
 * It collects the favourites from the local storage. If no args are passed it returns an array of objects.
 * If a truthy arg is passed it returns a tuple where the first element is the same array of objects, and the
 * second is an array of strings representing the ids of the objects.
 * @param {boolean} getIdsToo a flag used to get the ids of the data
 * @return {Array<Object> || [Array<Object>, Array<String>]}
 */
export const getFavs = (getIdsToo = false) => {
  const collection = getFromStorage(KEY) || []
  if (getIdsToo) {
    return [collection, collection.reduce((acc, {id}) => ([...acc, id]), [])]
  } else {
    return collection
  }
}

/**
 * addToFavs
 * Adds the passed object to the favs list stored in the localstorage
 * @param {Object} value object representing a picture from unsplashed
 * @return {void}
 */
export const addToFavs = value => {
  const [collection, ids] = getFavs(true)
  if (!ids.includes(value.id)) {
    addToStorage(KEY, [...collection, value])
  }
}
/**
 * removeFromFavsById
 * @param {string} idToRemove id of the picture object to remove
 * @return {void}
 */
export const removeFromFavsById = idToRemove => {
  const collection = getFavs()
  const filtered = collection.filter(({ id }) => (id !== idToRemove))
  addToStorage(KEY, filtered)
}
/**
 * removeAllFavs
 * Clean up the favourites
 */
export const removeAllFavs = () => addToStorage(KEY, [])
/**
 * getFavsIdsOnly
 * A wrapper around getFavs to avoid confusion on it returned value
 */
export const getFavsIdsOnly = () => {
  const [, ids] = getFavs(true)
  return ids
}
