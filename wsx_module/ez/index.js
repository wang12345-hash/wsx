/**
 * 在数据全面添加任何东西
 * @param {any} num 需要改变的数据
 * @param {Number} n 需要修改的个数
 * @param {any} str 添加的内容
 * @param {Boolean} type 修改的类型
**/
export function ez(num, n, str, type) {
	var type = type || false;
	if (type) {
		return (Array(n + (`${num}`).length).join(str) + num).slice(-(n + (`${num}`).length));
	} else {
		return (Array(n).join(str) + num).slice(-n);
	}
}
