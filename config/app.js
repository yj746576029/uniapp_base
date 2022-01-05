const BASE_URI = {
	'development' : 'https://dev.xxx.com',
	'production' : 'https://prod.xxx.com'
}
module.exports = {
	// 请求域名 格式： https://您的域名
	HTTP_REQUEST_URL: `${BASE_URI[process.env.NODE_ENV]}`,
	// 以下配置在没有特殊的前提下,不需要做任何的修改
	HEADER: {
		'content-type': 'application/json',
	},
	// 回话密钥名称 请勿修改此配置
	TOKEN_NAME: 'Authorization',
	//分页最多显示条数
	LIMIT: 10
}
