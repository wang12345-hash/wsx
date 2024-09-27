/**
 * 指定区域内容滚动
 * @param {String} id 指定区域ID
 * @param {String} type 方向
 * @param {String,Number} time 多久滚动一次
 * @param {String} size 滚动多少（需要带单位）
 * @param {Number} num 滚动速度
 * @param {String} margin 滚动位置条数距离边距的距离
 * @param {Boolean} lets 是否鼠标引入关闭滚动
**/
export function appointScroll(id, type, time, size, num, margin, lets) {
	let timmerIDJSABC = '';
	const acquiesce = {
		lets: lets || false,
		type: type || 'top',
		time: Number(time) || 5000,
		margin: margin || '0px',
		size: size || '0px',
		num: num || 1,
	};
	if (acquiesce.lets) {
		clearInterval(timmerIDJSABC);
	}
	const childLabel = document.getElementById(id).children;
	for (let i = 0; i < childLabel.length; i++) {
		const item = childLabel[i];
		if (acquiesce.type === 'top') {
			item.style.transition = 'margin-top 0.8s';
		}
		if (type === 'left') {
			item.style.transition = 'margin-top 0.8s';
			item.style.float = 'left';
		}
	}
	if (type === 'left') {
		document.getElementById(id).style.width = `${childLabel[0].clientWidth * childLabel.length}px`;
	}
	function MhyMar() {
		const first = document.getElementById(id).firstElementChild;
		switch (type) {
			case 'left':
				first.style.marginLeft = acquiesce.margin;
				first.style.marginLeft = acquiesce.size;
				break;
			default:
				first.style.marginTop = acquiesce.margin;
				first.style.marginTop = acquiesce.size;
		}
		setTimeout(() => {
			switch (type) {
				case 'left':
					first.style.marginLeft = acquiesce.margin;
					break;
				default:
					first.style.marginTop = acquiesce.margin;
			}
			document.getElementById(id).appendChild(first);
		}, 800);
	}
	if (document.getElementById(id).childNodes.length >= acquiesce.num) {
		if (acquiesce.lets) {
			timmerIDJSABC = setInterval(MhyMar, acquiesce.time);
			document.getElementById(id).onmousedown = () => {
				clearInterval(timmerIDJSABC);
			};
			document.getElementById(id).onmouseover = () => {
				clearInterval(timmerIDJSABC);
			};
			document.getElementById(id).onmouseout = () => {
				timmerIDJSABC = setInterval(MhyMar, acquiesce.time);
			};
		} else {
			let tmer = setInterval(MhyMar, acquiesce.time);
			document.getElementById(id).onmousedown = () => {
				clearInterval(tmer);
			};
			document.getElementById(id).onmouseover = () => {
				clearInterval(tmer);
			};
			document.getElementById(id).onmouseout = () => {
				tmer = setInterval(MhyMar, acquiesce.time);
			};
		}
	}
}
