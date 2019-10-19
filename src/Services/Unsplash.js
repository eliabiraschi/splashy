// API ref docs https://unsplash.com/documentation#getting-started

import axios from 'axios'

// this file is gitignored - check the unsplash docs for more info
import { UNSPLASH_KEY } from '../config'

const BASE = 'https://api.unsplash.com/'

// special headers as described on the upsplash docs
const headers = {
  'Authorization': `Client-ID ${UNSPLASH_KEY}`,
  'Accept-Version': 'v1',
}

/**
 * getLatest
 * Returns the lastest pictures from unplash as array of objects
 * @param {string} endpoint api where to perform the GET request
 * @returns {Array<Object>}
 */
export const getLatest = (endpoint = 'photos') => axios.get(BASE + endpoint, {
    headers,
  })
  .then(({ data }) => data)

/**
 * searchByKeywords
 * It makes a simple search by keywords using the unplash apy
 * @param {string} query the query string for the search
 * @param {string} endpoint api where to perform the request
 * @returns {Array<Object>}
 */
export const searchByKeywords = (query, endpoint = 'search/photos') => axios.get(BASE + endpoint, {
    params: { query },
    headers,
  })
  .then(({ data }) => data.results)
