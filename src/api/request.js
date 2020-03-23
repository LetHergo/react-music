import axios from 'axios'
import { Toast } from 'antd-mobile'
// create an axios instance
const service = axios.create({
	baseURL: 'http://localhost:4000', // url = base url + request url
	withCredentials: true, // send cookies when cross-domain requests
	timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	config => {
		// do something before request is sent

		return config
	},
	error => {
		// do something with request error
		console.log('req', error) // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	response => {
		const res = response.data
		// console.log(res)
		if (res.code !== 200) {
			Toast.fail('请求失败')
			return Promise.reject(new Error('请求失败'))
		} else {
			return res
		}
	},
	error => {
		console.log('res' + error) // for debug
		console.log('Message')
		Toast.fail('请求失败')
		return Promise.reject(error)
	}
)

export default service
