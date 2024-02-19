import { makeInstaller } from './make-installer'
import Components from './component'
import Plugins from './plugin'

const installer = makeInstaller([...Components, ...Plugins])

export default installer
