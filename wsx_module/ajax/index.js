/**
 * 网络请求
 * @param {String} methods 请求方式
 * @param {String} url 请求地址
 * @param {any} data 请求参数
**/
import { notification } from '../notification/index.js';
export function ajax(methods = 'GET', url = '', data = null) {
	if (!url) {
		notification({
			title: 'ajax参数错误！',
			message: 'url，第二个参必传',
			type: 'error',
		});
		return;
	}

	/* eslint-disable no-undef */
	return new Promise((resolve, reject) => {
		const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open(methods, url, true);
		if (methods === 'POST' || methods === 'post') {
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
		if (data) {
			let data2 = null;
			for (const key in data) {
				data2 += `${key}=${data[key]}&`;
			}
			data2 = data2.slice(0, data2.length - 1);
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(xhr.responseText);
					} else {
						reject(xhr.status);
					}
				}
			};
			xhr.send(data2);
		} else {
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(xhr.responseText);
					} else {
						reject(xhr.status);
					}
				}
			};
			xhr.send(null);
		}
	});

	/* eslint-disable no-undef */
}
