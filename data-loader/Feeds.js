import DataLoader from 'dataloader'
import $ from 'axios'

const API_BASE_URL = 'http://localhost:8091/api'
const API_CONFIG = {
  headers: { Authorization: `Token 28fbb6ae14970d7c43ef254a120b57f860aaaedf` } // <-- should be fetched somehow instead
}
// /api/locations/{app_key}/feeds
function Feeds () {}
// /api/locations/{app_key}/feeds/{key}
function Feed () {}

export default function Beacons () {
  return new DataLoader(async (keys) => {
    try {
      const result = await $.all(keys.map(
        async (key) => {
          const { location, key: beacon } = key
          if (beacon) {
            const { data } = await $.get(`${API_BASE_URL}/locations/${location}/beacons/${beacon}`, API_CONFIG)
            return data
          }
          const { data } = await $.get(`${API_BASE_URL}/locations/${location}/beacons`, API_CONFIG)
          return data.results
        }
      ))
      return result
    } catch (error) { console.error(error); throw error }
  })
}
