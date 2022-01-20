import {
	HTTP_REQUEST_URL,
	HEADER,
	TOKEN_NAME
} from '@/config/app';
import store from '../store';

/**
 * 发送请求
 */
function baseRequest(url, method, data) {
	let baseUrl = HTTP_REQUEST_URL,
		header = {...HEADER};
	if (store.state.app.token){
		header[TOKEN_NAME] = store.state.app.token;
	}
	return new Promise((reslove, reject) => {
		uni.request({
			url: baseUrl + url,
			method: method || 'GET',
			header: header,
			data: data || {},
			success: (res) => {
				if (res.data.code == '10000')
					reslove(res.data, res);
				else if (['90004'].indexOf(res.data.code) !== -1) {
					// 登录过期操作
					reject(res.data);
				} else
					reject(res.data.msg || '系统错误');
			},
			fail: (msg) => {
				reject('请求失败');
			}
		})
	});
}

const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data) => baseRequest(api, method, data)
});



export default request;
