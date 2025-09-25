const process = module.exports = {}

process.title = 'browser'
process.browser = true
process.env = {}
process.argv = []
process.version = ''
process.versions = {}

function noop () {}

process.on = noop
process.addListener = noop
process.once = noop
process.off = noop
process.removeListener = noop
process.removeAllListeners = noop
process.emit = noop
process.prependListener = noop
process.prependOnceListener = noop

process.nextTick = (func, ...args) => window.queueMicrotask(() => func(...args))

process.listeners = (name) => []

process.cwd = () => '/'
process.umask = () => 0
process.binding = (name) => { throw new Error('process.binding is not supported') }
process.chdir = (dir) => { throw new Error('process.chdir is not supported') }
