import Locations from './Locations'
import Beacons from './Beacons'
import Users from './Users'
import Observers from './Observers'
import Organizations from './Organizations'

export default function () {
  return {
    beacons: Beacons(),
    locations: Locations(),
    observers: Observers(),
    organizations: Organizations(),
    users: Users()
  }
}
