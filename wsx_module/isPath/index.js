/**
 * 判断是否是路由
 * @param {String} str 需要判断的路由
**/
import { notification } from '../notification/index.js';
export function isPath(str = '') {
	if (str === '') {
		notification({
			title: '方法<isPath>提示',
			message: '参数不能为空哟！',
			type: 'error',
		});
		return false;
	}
	const pathRegex = /^(\/[\w-]+)+\/?|^(http|https):\/\/[\w-.]+\.[\w-./?%&=]*$/;
	return pathRegex.test(str);
}
