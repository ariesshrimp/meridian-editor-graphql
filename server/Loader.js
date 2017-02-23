import DataLoader from 'dataloader'
import $ from 'axios'
const API_BASE_URL = 'http://localhost:8091/api'
const API_CONFIG = {
  headers: { Authorization: `Token 28fbb6ae14970d7c43ef254a120b57f860aaaedf` }
}

export default function () {
  return {
    location: Location(),
    beacons: Beacons(),
    observer: Observer()
  }
}

function Location () {
  return new DataLoader(async (ids) => {
    try {
      const data = await $.all(ids.map(
        async (id) => {
          const { data } = await $.get(`${API_BASE_URL}/locations/${id}`, API_CONFIG)
          return data
        }
      ))
      return data
    } catch (error) { console.error(error); throw error }
  })
}

function Beacons () {
  return new DataLoader(async (ids) => {
    try {
      const data = await $.all(ids.map(
        async (id) => {
          const { data } = await $.get(`${API_BASE_URL}/locations/${id}/beacons`, API_CONFIG)
          return data.results
        }
      ))
      return data
    } catch (error) { console.error(error); throw error }
  })
}

function Observer () {
  return new DataLoader(async (ids) => {
    try {
      const data = await $.all(ids.map(
        async (id) => {
          const { data } = await $.get(`${API_BASE_URL}/locations/${id}/observers`, API_CONFIG)
          return data.results
        }
      ))
      return data
    } catch (error) { console.error(error); throw error }
  })
}
let log = x => { console.log(x); return x }

// Observer().load('5099328771194880').then(log)
