import http from 'http'
import assert from 'assert'

import '../src/index.js'

describe('Node Server Runs', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3000', res => {
      assert.strictEqual(200, res.statusCode)
      done()
    })
  })
})
