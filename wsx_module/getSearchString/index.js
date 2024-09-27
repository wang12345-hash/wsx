/**
 * 获取地址栏参数
 * @param {String} key 获取的字段
**/
import { notification } from '../notification/index.js';
export function getSearchString(key = '') {
	const url = window.location.search;
	const str = url.substring(1, url.length);
	const arr = str.split('&');
	const obj = {};
	let data = '';
	for (let i = 0; i < arr.length; i++) {
		const paramArr = arr[i].split('=');
		obj[decodeURIComponent(paramArr[0])] = decodeURIComponent(paramArr[1]);
	}
	if (key === '') {
		data = obj;
	} else {
		if (obj[key] === undefined || obj[key] === '' || !obj[key]) {
			notification({
				title: 'getSearchString返回值提示',
				message: '当前地址栏没有您需要的参数',
				type: 'success',
			});
		} else {
			data = obj[key];
		}
	}
	return data;
}
