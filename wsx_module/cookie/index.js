/**
 * 存取cookie
 * @param {String} type 设置类型
 * @param {String} Str 设置名称
 * @param {String} Data 存储的数据
 * @param {Number} time 存储的时长
**/
import { notification } from '../notification/index.js';
export function cookie(type, Str, Data, time) {
	var type = type || '';
	if (type != 'get' && type != 'set' && type != 'delete') {
		this.notification({
			title: 'cookie提示',
			message: '第一个参数取值范围：【get，set，delete】',
			type: 'error',
		});
		return;
	}
	function setCookie(name, value, days) {
		let expires = '';
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = `; expires=${date.toUTCString()}`;
		}
		document.cookie = `${name}=${value}${expires}; path=/`;
	}
	function getCookie(name) {
		const nameEQ = `${name}=`;
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
		  let cookie = cookies[i];
		  while (cookie.charAt(0) == ' ') {
		    cookie = cookie.substring(1, cookie.length);
		  }
		  if (cookie.indexOf(nameEQ) == 0) {
		    return cookie.substring(nameEQ.length, cookie.length);
		  }
		}
		return null;
	}
	if (type === 'set') {
		var time = time || 1;
		var Data = Data || '';
		const oDate = new Date();
		const existingValue = getCookie(Str);
		if (existingValue === null || existingValue !== Str) {
		  setCookie(Str, Data, time);
		}
	}
	if (type === 'get') {
		return getCookie(Str);
	}
	if (type === 'delete') {
		document.cookie = `${Str}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	}
}
