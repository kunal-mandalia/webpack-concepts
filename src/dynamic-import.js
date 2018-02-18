const req = require.context('./components/', true, /\.reducer.js$/)

const reducers = req.keys().reduce((acc, cur) => {
  acc[cur] = req(cur).default
  return acc
}, {})

export default reducers
