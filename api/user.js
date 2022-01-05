import request from "@/utils/request.js";

/**
 * 登录
 * 
 */
export function login(params) {
	return request.post('login', params);
}

/**
 * 获取用户信息
 * 
 */
export function getUserInfo(params) {
	return request.get('getLoginInfo', params);
}
