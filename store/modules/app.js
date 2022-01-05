import {
	login,
	getUserInfo
} from "@/api/user.js";
import {
	TOKEN,
	USER_INFO,
	EXPIRES_TIME
} from '@/config/cache';
import Cache from '@/utils/cache';

const state = {
	token: Cache.get(TOKEN) || false,
	userInfo: {}
};

const mutations = {
	LOGIN(state, opt) {
		state.token = opt.token;
		Cache.set(TOKEN, opt.token, opt.time);
	},
	LOGOUT(state) {
		state.token = undefined;
		Cache.clear(TOKEN);
	},

	UPDATE_USERINFO(state, userInfo) {
		state.userInfo = userInfo;
		Cache.set(USER_INFO, userInfo);
	}
};

const actions = {
	login({
		state,
		commit
	}, code){
		return new Promise(reslove => {
			// uni.login({
			// 	provider: 'weixin',
			// 	success: (loginRes) => {
			// 		if(loginRes.errMsg === 'login:ok') {
			// 			login({code:loginRes.code}).then(res => {
			// 				// let time = res.data.expires_time - Cache.time();
			// 				let time = 0 // 永久
			// 				commit("LOGIN", {token:res.data.token,time:time});
			// 				// Cache.set(EXPIRES_TIME,res.data.expires_time,time);
			// 				reslove();
			// 			});
			// 		}else{
			// 			uni.showToast({
			// 			    title: '登录失败',
			// 			    duration: 2000
			// 			});
			// 		}
			// 	}
			// });
		}).catch(() => {
		
		});
	},
	userInfo({
		state,
		commit
	}, force) {
		console.log('state',state)
		return new Promise(reslove => {
			getUserInfo().then(res => {
				commit("UPDATE_USERINFO", res.data);
				reslove(res.data);
			});
		}).catch(() => {

		});
	}
};

export default {
	state,
	mutations,
	actions
};
