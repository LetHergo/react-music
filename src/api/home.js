import request from './request'

export function getBanner() {
	return request.get('/banner')
}

export function getRecommend(data) {
	return request({
		url: '/personalized',
		method: 'get',
		params: data
	})
}

export function getRecommendMusic() {
	return request({
		url: '/personalized/newsong',
		method: 'get',
	})
}
