import express from 'express'

// this require is necessary for server HMR to recover from error
// tslint:disable-next-line:no-var-requires
let app = require('./server').default

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...')
    try {
      app = require('./server').default
    } catch (error) {
      console.error(error)
    }
  })
  console.info('✅  Server-side HMR Enabled!')
}

// https://github.com/jaredpalmer/razzle/issues/356#issuecomment-432344585
// A simple workaround for circumventing baking ports into the build
const getEnv = (key: string) => process.env[key]
const port = getEnv('PORT') || 3000

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, (err: Error) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`> Started on port ${port}`)
  })
