import DataLoader from 'dataloader'
import { $, API_BASE_URL, API_CONFIG } from './api'

export default function Organizations () {
  return new DataLoader(async (keys) => {
    try {
      const result = await $.all(keys.map(
        async (key) => {
          const { id, count } = JSON.parse(key)
          if (id) {
            const { data } = await $.get(`${API_BASE_URL}/organizations/${id}`, API_CONFIG)
            return data
          }
          const { data } = await $.get(`${API_BASE_URL}/organizations?page_size=${count}`, API_CONFIG)
          return data.results
        }
      ))
      return result
    } catch (error) { console.error(error); throw error }
  })
}
