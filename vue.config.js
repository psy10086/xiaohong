module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'common': '@components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
