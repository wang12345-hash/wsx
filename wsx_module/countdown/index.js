/**
 * 倒计时。需要自己写计时器
 * @param {String} UtureTime 指定的时间:支持时间戳
 * @returns {Object} 生成的时间对象
**/
import {notification} from "../notification/index.js";
export function countdown(UtureTime){
	if(UtureTime==="" || UtureTime===undefined || UtureTime==="undefined" || UtureTime===null || !UtureTime){
		notification({
			title:"提示",
			message:"《countdown》参数不能为空",
			type:"error"
		});
		return;
	};
	if(isNaN(Number(UtureTime)) && !isNaN(Date.parse(UtureTime))===false){
		notification({
			title:"提示",
			message:"请输入正确的时间格式"
		});
		return;
	};
	if(!isNaN(Number(UtureTime))){
		let YY=new Date(Number(UtureTime)).getFullYear();
		let MM=new Date(Number(UtureTime)).getMonth()+1;
		let DD=new Date(Number(UtureTime)).getDate();
		let H=new Date(Number(UtureTime)).getHours();
		let m=new Date(Number(UtureTime)).getMinutes();
		let s=new Date(Number(UtureTime)).getSeconds();
		UtureTime=`${YY}-${MM}-${DD} ${H}:${m}:${s}`;
	};
	const Time=UtureTime.replace(/\-/g,"/");
	let ms=parseInt(new Date(Time) - new Date());
	if(ms>0){
		const day = Math.floor(ms / (24 * 3600 * 1000));
		const hours = Math.floor((ms % (24 * 3600 * 1000)) / (3600 * 1000));
		const minutes = Math.floor(((ms % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
		const seconds = Math.round(((ms % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000) / 1000);
		return {
			day: day,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
			code: 1
		};
	}else if(ms<0){
		ms = parseInt(new Date() -  new Date(Time));
		const day = Math.floor(ms / (24 * 3600 * 1000));
		const hours = Math.floor((ms % (24 * 3600 * 1000)) / (3600 * 1000));
		const minutes = Math.floor(((ms % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
		const seconds = Math.round(((ms % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000) / 1000);
		return {
			day: day,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
			code: -1
		};
	}else{
		return {
			message: "几乎为0的概率，恭喜您中奖了",
			code:0
		};
	}
}