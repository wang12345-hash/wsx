/**
 * 获取页面z-index的最大值
**/
export function getMaxZIndex(){
	let max=0;
	const elemnts=document.getElementsByTagName('*');
	Array.from(elemnts).forEach(element=>{
		const style=getComputedStyle(element);
		const zIndex=style.getPropertyValue('z-index');
		if(zIndex && !isNaN(parseInt(zIndex))){
			max=Math.max(max,parseInt(zIndex));
		}
	});
	return max;
};