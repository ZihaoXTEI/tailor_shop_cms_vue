let BASE_URL = ''
const TIME_OUT = 10000

if (import.meta.env.MODE === 'development') {
  BASE_URL = '/api'
} else {
  BASE_URL = '/api'
}

export { BASE_URL, TIME_OUT }
