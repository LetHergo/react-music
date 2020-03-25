import request from './request'

export function searchMusic(data) {
	return request({
		url: '/search',
    method: 'get',
    params:data
	})
}
