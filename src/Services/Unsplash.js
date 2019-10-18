import axios from 'axios'
import memoize from 'promise-memoize'

import { UNSPLASH_KEY } from '../config'

const BASE = 'https://api.unsplash.com/'

const headers = {
  'Authorization': `Client-ID ${UNSPLASH_KEY}`,
  'Accept-Version': 'v1',
}

export const getLatest = memoize((endpoint = 'photos') => axios.get(BASE + endpoint, {
    headers,
  })
  .then(({ data }) => data)
, 60000)

export const searchByKeywords = memoize((query, endpoint = 'search/photos') => axios.get(BASE + endpoint, {
    params: { query },
    headers,
  })
  .then(({ data }) => data.results)
, 60000)
