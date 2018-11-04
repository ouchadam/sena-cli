const plugin = require('./plugin/lib/index')
const dependencies = require('./dependency-generator')
const { send, json } = require('micro')

module.exports = async (microReq, microRes) => {
    const { req, res } = await expressShim(microReq, microRes)
    plugin.plugin(dependencies)(req, res)
}

const expressShim = async (microReq, microRes) => {
    const body = await json(microReq)
    const req = { ...microReq, body: body }
    const res = {
        ...microRes,
        status: (code) => {
            return {
                send: (data) => {
                    send(microRes, code, data)
                }
            }
        }
    }
    return { req, res }
}
