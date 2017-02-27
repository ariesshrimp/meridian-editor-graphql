import DataLoader from 'dataloader'
import { $, API_BASE_URL, API_CONFIG } from './api'

export default function Locations () {
  return new DataLoader(async keys => {
    try {
      const data = await $.all(keys.map(
        async key => {
          const { id, } = JSON.parse(key)
          const { data } = await $.get(`${API_BASE_URL}/locations/${id}`, API_CONFIG)
          return data
        }
      ))
      return data
    } catch (error) { console.error(error); throw error }
  })
}
