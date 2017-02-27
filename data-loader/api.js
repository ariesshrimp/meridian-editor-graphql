import axios from 'axios'

export const $ = axios
export const API_BASE_URL = 'http://localhost:8091/api'
export const API_CONFIG = {
  headers: { Authorization: `Token 28fbb6ae14970d7c43ef254a120b57f860aaaedf` } // <-- should be fetched somehow instead
}

