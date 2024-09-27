/**
 * 获取系统时间
**/
export function systemTime() {
	const Years = new Date().getFullYear();
	let Month = new Date().getMonth() + 1;
	let No = new Date().getDate();
	let Hours = new Date().getHours();
	let Minutes = new Date().getMinutes();
	let Seconds = new Date().getSeconds();
	const Day = new Date().getDay();
	const newD = ['日', '一', '二', '三', '四', '五', '六'];
	if (Month < 10) { Month = `0${Month}`; }
	if (No < 10) { No = `0${No}`; }
	if (Hours < 10) { Hours = `0${Hours}`; }
	if (Minutes < 10) { Minutes = `0${Minutes}`; }
	if (Seconds < 10) { Seconds = `0${Seconds}`; }
	const Week = newD[Day];
	return {
		Years,
		Month,
		Date: No,
		Hours,
		Minutes,
		Seconds,
		Week: `星期${Week}`,
	};
}
