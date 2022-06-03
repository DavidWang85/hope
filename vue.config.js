module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hope/'
    : '/',
  plugins: { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
}