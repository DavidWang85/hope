module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hope/'
    : '/',
  plugins: { src: '@/methods/mixins/vue-fb-customer-chat.js', ssr: false }
}