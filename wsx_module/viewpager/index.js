/**
 * 轮播图
 * @param {String} obj.id 轮播图承载盒子
 * @param {Array} obj.data 数据
 * @param {String} obj.direction 方向
 * @param {Number} obj.speed 速度
 * @param {Boolean} obj.around 左右箭头
 * @param {Array} obj.aroundIcon 左右箭头的图片
 * @param {String} obj.imgValue 图片样式
 * @param {String} obj.messageClass 提示内容class名，优先级高于prompt
 * @param {Number} obj.switchingSpeed 切换速度
 * @param {Boolean} obj.hoverMover 鼠标移入是否关闭轮播图
 * @param {Array} obj.aroundClassName 左右箭头的class，仅支持两个，如：[a,b];
 * @param {Boolean} obj.indicator.show 指否显示指示器
 * @param {Array} obj.indicator.direction 指示器的位置，['bottom','center']
 * @param {String} obj.indicator.shape 指示器的形状
 * @param {String} obj.indicator.default 指示器默认颜色
 * @param {String} obj.indicator.select 指示器选中的颜色
 * @param {String} obj.indicator.width 指示器的宽度（需要单位）
 * @param {String} obj.indicator.height 指示器的高度（需要单位）
 * @param {Object} obj.prompt 提示内容样式 驼峰命名，优先级低于messageClass
**/
import { notification } from '../notification/index.js';
import { isPath } from '../isPath/index.js';
import { random } from '../random/index.js';
export function viewpager(obj) {
	const id = obj.id || '';
	if (id === '') {
		notification({
			title: '轮播图错误！',
			message: '轮播图承载盒子不能为空！',
			type: 'error',
		});
		return;
	}
	const defaultInfo = {
		data: obj.data || [], // 数据
		direction: obj.direction || 'left', // 方向
		speed: obj.speed || 5000, // 速度
		around: obj.around || false, // 左右箭头
		aroundIcon: obj.aroundIcon || [], // 左右箭头图标
		imgValue: obj.imgValue || 'max', // 图片样式
		messageClass: obj.messageClass || '', // 提示内容class名，优先级高于prompt,如果拥有此属性，prompt将不生效
		switchingSpeed: obj.switchingSpeed || 1000, // 切换速度
		hoverMover: obj.hoverMover || false, // 鼠标移入是否关闭轮播
		aroundClassName: obj.aroundClassName || [], // 左右箭头的class名
	};
	const indicator = {
		show: true, // 是否显示指示器
		direction: ['bottom', 'center'], // 指示器位置
		shape: 'round', // 指示器形状
		default: '#ffffff', // 指示器默认颜色
		select: '#009944', // 指示器选中颜色
		width: '24px', // 指示器宽度
		height: '4px', // 指示器高度
	};
	const prompt = { // 提示文字style属性驼峰命名，优先级低于messageClass
		fontSize: '16px',
		color: '#333333',
		padding: '5px 10px',
		backgroundColor: '#ffffff',
		borderRadius: '4px',
		bottom: '16px',
		left: '16px',
		zIndex: 3,
	};
	const ids = random(10);
	if (obj.indicator && obj.indicator) {
		for (const key in obj.indicator) {
			indicator[key] = obj.indicator[key];
		}
	}
	if (defaultInfo.messageClass === '' && obj.prompt) {
		for (const key in obj.prompt) {
			prompt[key] = obj.prompt[key];
		}
	}
	document.getElementById(id).style.overflow = 'hidden';
	document.getElementById(id).style.position = 'relative';
	if (defaultInfo.data.length === 0) {
		return;
	}
	if (defaultInfo.data.length === 1 && defaultInfo.data[0].src) {
		const href = document.createElement('a');
		const img = document.createElement('img');
		href.style.cssText = 'display: block;width: 100%;height: 100%;overflow: hidden;position: relative;';
		href.target = defaultInfo.data[0].target || '_parent';
		href.href = defaultInfo.data[0].href || 'javascript: void(0);';
		img.alt = '加载失败';
		img.src = defaultInfo.data[0].src;
		if (defaultInfo.imgValue === 'max') {
			img.style.width = '100vmax';
		} else if (defaultInfo.imgValue === 'min') {
			img.style.width = '100vmin';
		} else {
			img.style.cssText = defaultInfo.imgValue;
		}
		href.appendChild(img);
		if (defaultInfo.data[0].message) {
			const div = document.createElement('div');
			if (defaultInfo.messageClass) {
				div.classList = defaultInfo.messageClass;
			} else {
				div.style.position = 'absolute';
				for (const key in prompt) {
					div.style[key] = prompt[key];
				}
			}
			div.textContent = defaultInfo.data[0].message;
			href.appendChild(div);
		}
		document.getElementById(id).appendChild(href);
	} else {
		const typeArr = ['left', 'right', 'top', 'bottom'];
		let isty = false;
		for (let i = 0; i < typeArr.length; i++) {
			if (defaultInfo.direction === typeArr[i]) {
				isty = true;
				break;
			}
		}
		if (!isty) {
			notification({
				title: '轮播图参数错误提示',
				message: '检测到您的参数<direction>传值不对，使用了默认参数',
				type: 'warning',
			});
			defaultInfo.direction = 'left';
		}
		const ul = document.createElement('ul');
		const width = document.getElementById(id).clientWidth;
		const height = document.getElementById(id).clientHeight;
		ul.style.cssText = 'position: absolute;margin: 0;padding: 0;';
		switch (defaultInfo.direction) {
			case 'top':
				ul.style.height = `${height * (defaultInfo.data.length + 2)}px`;
				ul.style.width = '100%';
				ul.style.left = 0;
				ul.style.top = `${-height}px`;
				break;
			case 'bottom':
				ul.style.height = `${height * (defaultInfo.data.length + 2)}px`;
				ul.style.width = '100%';
				ul.style.left = 0;
				ul.style.bottom = `${-height}px`;
				break;
			case 'right':
				ul.style.width = `${width * (defaultInfo.data.length + 2)}px`;
				ul.style.height = '100%';
				ul.style.right = `${-width}px`;
				ul.style.top = 0;
				ul.style.cssText += 'display: flex;flex-direction: row;justify-content: flex-start;align-items: center;';
				break;
			default:
				ul.style.width = `${width * (defaultInfo.data.length + 2)}px`;
				ul.style.height = '100%';
				ul.style.left = `${-width}px`;
				ul.style.top = 0;
				ul.style.cssText += 'display: flex;flex-direction: row;justify-content: flex-start;align-items: center;';
		}
		const firstData = defaultInfo.data[defaultInfo.data.length - 1];
		const last = defaultInfo.data[0];
		defaultInfo.data.unshift(firstData);
		defaultInfo.data.push(last);
		for (let i = 0; i < defaultInfo.data.length; i++) {
			const li = document.createElement('li');
			li.style.listStyle = 'none';
			li.style.width = `${width}px`;
			li.style.height = `${document.getElementById(id).clientHeight}px`;
			const href = document.createElement('a');
			const img = document.createElement('img');
			href.style.cssText = 'display: block;width: 100%;height: 100%;overflow: hidden;position: relative;';
			href.target = defaultInfo.data[i].target || '_parent';
			href.href = defaultInfo.data[i].href || 'javascript:;';
			img.alt = '加载失败';
			img.src = defaultInfo.data[i].src;
			if (defaultInfo.imgValue === 'max') {
				img.style.width = '100vmax';
			} else if (defaultInfo.imgValue === 'min') {
				img.style.width = '100vmin';
			} else {
				img.style.cssText = defaultInfo.imgValue;
			}
			href.appendChild(img);
			if (defaultInfo.data[i].message) {
				const div = document.createElement('div');
				if (defaultInfo.messageClass) {
					div.classList = defaultInfo.messageClass;
				} else {
					div.style.position = 'absolute';
					for (const key in prompt) {
						div.style[key] = prompt[key];
					}
				}
				div.textContent = defaultInfo.data[i].message;
				href.appendChild(div);
			}
			li.appendChild(href);
			ul.appendChild(li);
		}
		document.getElementById(id).appendChild(ul);
		let current = 0;
		let timmer = null;
		const size = defaultInfo.data.length - 2;
		function slider() {
			current += 1;
			movement();
		}
		function transitionFn() {
			if (defaultInfo.direction === 'left') {
				ul.style.transition = `left ${defaultInfo.switchingSpeed / 1000}s`;
			} else if (defaultInfo.direction === 'right') {
				ul.style.transition = `right ${defaultInfo.switchingSpeed / 1000}s`;
			} else if (defaultInfo.direction === 'top') {
				ul.style.transition = `top ${defaultInfo.switchingSpeed / 1000}s`;
			} else if (defaultInfo.direction === 'bottom') {
				ul.style.transition = `bottom ${defaultInfo.switchingSpeed / 1000}s`;
			}
		}
		function movement() {
			transitionFn();
			switch (defaultInfo.direction) {
				case 'top':
					ul.style.top = `${-(current + 1) * height}px`;
					ul.style.left = 0;
					break;
				case 'bottom':
					ul.style.bottom = `${-(current + 1) * height}px`;
					ul.style.left = 0;
					break;
				case 'right':
					ul.style.right = `${-(current + 1) * width}px`;
					ul.style.top = 0;
					break;
				default:
					ul.style.left = `${-(current + 1) * width}px`;
					ul.style.top = 0;
			}
			if (indicator.show) {
				const maxIds = document.getElementById(ids).children;
				for (let i = 0; i < maxIds.length; i++) {
					maxIds[i].style.backgroundColor = indicator.default;
				}
				if (current >= size) {
					maxIds[0].style.backgroundColor = indicator.select;
				} else if (current === -1) {
					maxIds[size - 1].style.backgroundColor = indicator.select;
				} else {
					maxIds[current].style.backgroundColor = indicator.select;
				}
			}
			setTimeout(() => {
				if (current === size) {
					ul.style.transition = 'none';
					current = 0;
					switch (defaultInfo.direction) {
						case 'top':
							ul.style.top = `${-height}px`;
							break;
						case 'bottom':
							ul.style.bottom = `${-height}px`;
							break;
						case 'right':
							ul.style.right = `${-width}px`;
							break;
						default:
							ul.style.left = `${-width}px`;
					}
				}
				if (current === -1) {
					ul.style.transition = 'none';
					current = size - 1;
					switch (defaultInfo.direction) {
						case 'top':
							ul.style.top = `${-(height * size)}px`;
							break;
						case 'bottom':
							ul.style.bottom = `${-(height * size)}px`;
							break;
						case 'right':
							ul.style.right = `${-(width * size)}px`;
							break;
						default:
							ul.style.left = `${-(width * size)}px`;
					}
				}
			}, defaultInfo.switchingSpeed);
		}
		if (indicator.show) {
			const ul1 = document.createElement('ul');
			ul1.id = ids;
			const shapeArr = ['round', 'quadrate'];
			let shapeType = false;
			for (let i = 0; i < shapeArr.length; i++) {
				if (shapeArr[i] === indicator.shape) {
					shapeType = true;
					break;
				}
			}
			if (!shapeType) {
				notification({
					title: '轮播图参数错误提示',
					message: '检测到您的参数<shape>传值不对，使用了默认参数',
					type: 'warning',
				});
				indicator.shape = 'round';
			}
			ul1.style.cssText += 'display: flex;flex-direction: row;justify-content: flex-start;align-items: center;position: absolute;z-index: 20;padding: 0;margin: 0;';
			if (indicator.direction[0] === 'center') {
				ul1.style.top = '50%';
			} else if (indicator.direction[0] === 'top') {
				ul1.style.top = '16px';
			} else if (indicator.direction[0] === 'bottom') {
				ul1.style.bottom = '16px';
			} else {
				ul1.style.top = indicator.direction[0];
			}
			if (indicator.direction[1] === 'center') {
				ul1.style.left = '50%';
			} else if (indicator.direction[1] === 'left') {
				ul1.style.left = '16px';
			} else if (indicator.direction[1] === 'right') {
				ul1.style.right = '16px';
			} else {
				ul1.style.left = indicator.direction[1];
			}
			if (indicator.direction[0] === 'center' && indicator.direction !== 'center') {
				ul1.style.transform = 'translateY(-50%)';
			} else if (indicator.direction[0] !== 'center' && indicator.direction === 'center') {
				ul1.style.transform = 'translateX(-50%)';
			} else if (indicator.direction[0] === 'center' && indicator.direction === 'center') {
				ul1.style.transform = 'translate(-50%,-50%)';
			}
			const listyle = {
				fontSize: prompt.fontSize,
				backgroundColor: indicator.default,
				color: indicator.select,
			};
			for (let i = 0; i < defaultInfo.data.length - 2; i++) {
				const li1 = document.createElement('li');
				li1.setAttribute('data-num', i);
				li1.style.cssText = 'text-align: center;margin: 0 2px;';
				li1.style.transition = `background-color ${defaultInfo.switchingSpeed / 1000}s`;
				if (i === 0) {
					li1.style.backgroundColor = indicator.select;
				} else {
					li1.style.backgroundColor = indicator.default;
				}
				li1.style.listStyle = 'none';
				for (const key in listyle) {
					li1.style[key] = listyle[key];
				}
				switch (indicator.shape) {
					case 'round':
						li1.style.borderRadius = '50%';
						li1.style.width = indicator.width;
						li1.style.height = indicator.width;
						break;
					default:
						li1.style.borderRadius = indicator.height;
						li1.style.width = indicator.width;
						li1.style.height = indicator.height;
				}
				ul1.appendChild(li1);
			}
			document.getElementById(id).appendChild(ul1);
			const oli = document.getElementById(ids).children;
			oli[0].style.backgroundColor = indicator.select;
			for (let i = 0; i < oli.length; i++) {
				oli[i].onmouseenter = () => {
					clearInterval(timmer);
					oli[current].style.backgroundColor = indicator.default;
					oli[i].style.backgroundColor = indicator.select;
					current = Number(oli[i].getAttribute('data-num'));
					movement();
					timmer = setInterval(slider, defaultInfo.speed + defaultInfo.switchingSpeed);
				};
			}
		}
		timmer = setInterval(slider, defaultInfo.speed + defaultInfo.switchingSpeed);
		if (defaultInfo.hoverMover) {
			document.getElementById(id).onmouseenter = () => {
				clearInterval(timmer);
			};
			document.getElementById(id).onmouseleave = () => {
				timmer = setInterval(slider, defaultInfo.speed + defaultInfo.switchingSpeed);
			};
		}
		if (defaultInfo.around) {
			const div_left = document.createElement('div');
			div_left.style.cssText += 'position: absolute;top: 50%;left: 16px;transform: translateY(-50%);z-index: 10;width: 24px;height: 48px;background-color: rgba(0,0,0,0.5);text-align:center;line-height: 48px;border-radius: 4px;color: rgba(255,255,255,0.5);';
			const div_right = document.createElement('div');
			div_right.style.cssText += 'position: absolute;top: 50%;right: 16px;transform: translateY(-50%);z-index: 10;width: 24px;height: 48px;background-color: rgba(0,0,0,0.5);text-align:center;line-height: 48px;border-radius: 4px;color: rgba(255,255,255,0.5);';
			if (defaultInfo.aroundClassName.length > 0) {
				div_left.classList += defaultInfo.aroundClassName[0];
			}
			let leftIcon = false; let rightIcon = false;
			if (defaultInfo.aroundIcon.length > 0) {
				leftIcon = isPath(defaultInfo.aroundIcon[0]);
				rightIcon = isPath(defaultInfo.aroundIcon[1]);
			}
			if (leftIcon) {
				const imgH = document.createElement('img');
				imgH.src = defaultInfo.aroundIcon[0];
				imgH.alt = '图片加载失败';
				div_left.appendChild(imgH);
			} else {
				div_left.textContent = '◀';
			}
			if (rightIcon) {
				const imgR = document.createElement('img');
				imgR.src = defaultInfo.aroundIcon[1];
				imgR.alt = '图片加载失败';
				div_right.appendChild(imgR);
			} else {
				div_right.textContent = '▶';
			}
			document.getElementById(id).appendChild(div_left);
			document.getElementById(id).appendChild(div_right);
			let clickMenu = true;
			div_left.onclick = () => {
				if (clickMenu) {
					clickMenu = false;
					setTimeout(() => {
						clickMenu = true;
					}, defaultInfo.switchingSpeed);
					current -= 1;
					movement();
				}
			};
			div_right.onclick = () => {
				if (clickMenu) {
					clickMenu = false;
					setTimeout(() => {
						clickMenu = true;
					}, defaultInfo.switchingSpeed);
					current += 1;
					movement();
				}
			};
		}
	}
}
