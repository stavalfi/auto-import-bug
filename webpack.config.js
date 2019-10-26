const path = require('path')

const config = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.sass', '.json'],
    alias: {
      '@client': path.resolve(__dirname,'js/client/src'),
      '@common': path.resolve(__dirname,'js/common/src'),
    },
  },
}
module.exports = config

console.log(config)
