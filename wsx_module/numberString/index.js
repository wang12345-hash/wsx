/**
 * 数字格式化
 * @param {Number,String} str 需要格式化的数字
**/
import { notification } from '../notification/index.js';
export function numberString(value) {
	var str = value || '';
	if (str === '') {
		this.notification({
			title: 'numberString提示',
			message: '<numberString>参数必传',
			type: 'error',
		});
		return;
	}
	str = `${value}`;
	let decimalIndex = str.indexOf('.');
	let formattedStr;
	
	if (decimalIndex !== -1) {
	  let integerPart = str.slice(0, decimalIndex);
	  let decimalPart = str.slice(decimalIndex);
	  integerPart = integerPart.replace(/(?=(\d{3})+(?!\d))/g, ',');
	  formattedStr = integerPart + decimalPart;
	} else {
	  formattedStr = str.replace(/(?=(\d{3})+$)/g, ',');
	};
	if (formattedStr[0] === ',') {
		formattedStr = formattedStr.slice(1, formattedStr.length);
	}
	
	return formattedStr;
}
