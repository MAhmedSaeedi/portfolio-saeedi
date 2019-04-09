const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://mahmedsaeedi.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': prod ? 'https://mahmedsaeedi.herokuapp.com':'http://localhost:3000',
  'process.env.CLIENT_ID': 'zri0QM14UWsltOdTpWMSGSEyOiQFiJA2'
}
