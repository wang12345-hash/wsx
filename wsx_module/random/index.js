/**
 * 获取随机数
 * @param {Number} num - 随机的个数,当type="color"时，表示透明度
 * @param {Boolean} type - 随机数的类型："num"（纯数字），"str"（字符串），"color"（颜色值）
 * @returns {String} - 生成的随机数或颜色值
**/
export function random(num=100,type="str"){
	function generateRandomNum(){
		const num2 = Math.floor(Math.random() * 10);
		let result=[];
		for (let i = 0; i < Number(num) - 1; i++) {
			result.push(parseInt(Math.random() * 10));
		};
		return result.join('')+num2;
	};
	function generateRandomColor(){
		if(Number(num)>=100){
			return "#"+Math.random().toString(16).substring(2,8).padEnd(6,"0");
		}else{
			let a=Math.random().toString(16).substring(2,8).padEnd(6,"0");
			let r=parseInt(a.substring(0,2),16);
			let g=parseInt(a.substring(2,4),16);
			let b=parseInt(a.substring(4,6),16);
			let opacity=Number(num);
			if(opacity<0){
				opacity=Math.abs(opacity);
			};
			let alpha = opacity < 1 ? opacity : opacity / 100;
			return `rgba(${r},${g},${b},${alpha})`;
		}
	};
	function generateRandomString(len){
		return len <= 11 ? Math.random().toString(36).substring(2, 2 + len).padEnd(len, "0") : generateRandomString(11) + generateRandomString(len - 11);
	};
	if(typeof type === "boolean"){
		return type ? generateRandomNum():generateRandomString(Number(num));
	}else{
		switch (type){
			case "num":
				return generateRandomNum();
			case "str":
				return generateRandomString(Number(num));
			case "color":
				return generateRandomColor();
			default:
				return generateRandomString(Number(num));
		};
	}
};
