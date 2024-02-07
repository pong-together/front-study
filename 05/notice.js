import http from './http.js'

const HEADERS = {
	'content-Type': 'application/json'
}

const BASE_URL = 'http://3.39.181.134:8000/notice/'

const list = () => http.get(BASE_URL, HEADERS)

export default {
	list
}