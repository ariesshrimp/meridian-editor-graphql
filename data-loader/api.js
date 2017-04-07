import axios from 'axios'

export const $ = axios
export const API_BASE_URL = 'http://localhost:8091/api'
export const API_CONFIG = {
  headers: { Authorization: `Token 60c68c5ed377e382116d2b6f2cf30a996d8aba6b` } // <-- should be fetched somehow instead
}

