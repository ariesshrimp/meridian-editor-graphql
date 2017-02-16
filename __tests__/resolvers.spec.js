import axios from 'axios'

const API = {
  get: async (path) => await axios.get(`http://localhost:8091/api${path}`),
  post: async (path) => await axios.post(`http://localhost:8091/api${path}`)
}

const locationResolver = async (_, { locationID }) => {
  const {data} = await API.get(`/locations/${locationID}`)
  return data
}

describe('RESOLVERS', () => {
  describe('QUERIES', () => {
    describe('location', () => {
      it('returns a location entity given a locationID', async () => {
        const actual = await locationResolver(null, {locationID: '5099328771194880'})

        // An arbitrary known shape for the given locationID
        const expected = {
          'modified': '2017-02-09T23:46:29Z',
          'created': '2017-02-09T23:11:21Z',
          'id': '5099328771194880',
          'name': 'New Location',
          'domain': 'new-location-2258',
          'org': '5662278724616192',
          'users': [],
          'features': [
            'app_maker'
          ],
          'namespace': '5099328771194880_1',
          'location': null,
          'latitude': null,
          'longitude': null,
          'phone': null,
          'address': null,
          'radius': null,
          'search_examples': [],
          'timezone': 'US/Pacific',
          'appviewer_version': '2.0',
          'app_level': 6,
          'account_type': 'paid',
          'is_published': true,
          'expiration_date': null,
          'is_locked': false,
          'rtls_id': null,
          'rtls_campus_id': null,
          'rtls_ssid': null,
          'minimum_step_distance': null,
          'default_language': null,
          'languages': [],
          'location_beacon_uuid': 'A465AAEB-1DAC-436F-8D02-CCF9744410C8',
          'proximity_beacon_uuid': '68000FCA-5C0E-4F5B-8AA3-503AE9F86CC1',
          'theme': {
            'inner_style': 'light',
            'logo_url': null,
            'map_style': null,
            'outer_style': 'dark',
            'primary_color': '#1f77bf',
            'secondary_color': '#0e3859',
            'title_color': null
          },
          'is_queued': false
        }
        expect(actual).toEqual(expected)
      })
    })
  })
})
