/**
 * 验证小数点后两位及多个小数
 * money 金额
 */
export function isMoney(money) {
	var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
	if (reg.test(money)) {
		return true
	} else {
		return false
	}
}

/**
 * 验证手机号码
 * money 金额
 */
export function checkPhone(c2543fff3bfa6f144c2f06a7de6cd10c0b650cae) {
	var reg = /^1(3|4|5|6|7|8|9)\d{9}$/
	if (reg.test(c2543fff3bfa6f144c2f06a7de6cd10c0b650cae)) {
		return true
	} else {
		return false
	}
}

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn 需要执行的方法，因this指向问题，建议不使用箭头函数
 * @param delay 间隔时间，默认值100
 * @param promptly 是否立即执行，默认false
 * @returns {Function}
 * @constructor
 */
export const debounce = (fn, delay=100, promptly=false) => {
	let timer = null;
	return function(...args) {
		// 立即执行
		if (promptly) {
			// 当timer为null时执行
			if (!timer) fn.apply(this, args);
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				timer = null;
			}, delay)
		} else {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				fn.apply(this, args);
			}, delay)
		}
	}
}
/**
 * 函数节流
 * @param fn 需要执行的方法，因this指向问题，建议不使用箭头函数
 * @param interval 间隔时间，默认值100
 * @returns {Function}
 * @constructor
 */
export const throttle = (fn, interval=100) => {
	let last
	let timer
	return function() {
		const args = arguments
		const now = +new Date()
		if (last && now - last < interval) {
			clearTimeout(timer)
			timer = setTimeout(() => {
				last = now
				fn.apply(this, args)
			}, interval)
		} else {
			last = now
			fn.apply(this, args)
		}
	}
}
