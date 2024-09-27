/**
 * rem单位的使用
 * @param {Number,String} designWidth 设计图宽度
 * @param {Number,String} windowWidth 页面实际宽度
 * @param {Number,String} num 换算比例
 * @param {Number,String} minWidth 最小宽度
**/
export function rem(designWidth = 1920, windowWidth = 1920, num = 10, minWidth = null) {
	const doc = document;
	const win = window;
	const docEl = doc.documentElement;
	const remStyle = doc.createElement('style');
	let tid = '';
	function refreshRem() {
		let width = docEl.getBoundingClientRect().width;
		width > windowWidth && (width = windowWidth);
		if (minWidth) {
			if (width < Number(minWidth)) {
				width = Number(minWidth);
				document.body.style.minWidth = `${minWidth}px`;
			}
		}
		const rempx = width * num / designWidth;
		remStyle.id = 'remIDSOCC';
		remStyle.innerHTML = `html{font-size:${rempx}px;}`;
	}
	if (doc.getElementById('remIDSOCC')) {
		doc.getElementById('remIDSOCC').parentNode.removeChild(doc.getElementById('remIDSOCC'));
	}
	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		let wrap = doc.createElement('div');
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	refreshRem();
	win.addEventListener('resize', () => {
		refreshRem();
	}, false);
	win.addEventListener('pageshow', (e) => {
		if (e.persisted) {
			refreshRem();
		}
	}, 300);
	if (doc.readyState === 'complete') {
		doc.body.style.fontSize = '16px';
	} else {
		doc.addEventListener('DOMContentLoaded', (e) => {
			doc.body.style.fontSize = '16px';
		}, false);
	}
}
