const Mock = require('mockjs');
const { param2Obj } = require('./utils');

const user = require('./data/user.js');
const table = require('./data/table.js');
const test = require("./data/test.js");
const mocks = [
    ...user,
    ...table,
    ...test
]

//用于前端模拟
//请谨慎使用，它会重新定义 XMLHttpRequest，这将导致您的许多第三方库失效（如进度事件）。
function mockXHR() {
    // mock patch
    // https://github.com/nuysoft/Mock/issues/300
    Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
    Mock.XHR.prototype.send = function () {
        if (this.custom.xhr) {
            this.custom.xhr.withCredentials = this.withCredentials || false

            if (this.responseType) {
                this.custom.xhr.responseType = this.responseType
            }
        }
        this.proxy_send(...arguments)
    }

    function XHR2ExpressReqWrap(respond) {
        return function (options) {
            let result = null
            if (respond instanceof Function) {
                const { body, type, url } = options
                // https://expressjs.com/en/4x/api.html#req
                result = respond({
                    method: type,
                    body: JSON.parse(body),
                    query: param2Obj(url)
                })
            } else {
                result = respond
            }
            return Mock.mock(result)
        }
    }

    for (const i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
    }
}

module.exports = {
    mocks,
    mockXHR
}
