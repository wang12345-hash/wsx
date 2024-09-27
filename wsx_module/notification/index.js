/**
 * 提示框
 * @param {String} obj.position 提示框的位置
 * @param {String} obj.title 提示框的标题
 * @param {String} obj.message 提示框的信息
 * @param {String} obj.type 提示框的类型
 * @param {Number} obj.duration 提示框停留时间
**/
import { random } from '../random/index.js';
import { getMaxZIndex } from "../getMaxZIndex/index.js";
export function notification(obj) {
	const div2ID = random(10);
	var obj = obj || {};
	const div1 = document.createElement('div');
	const div2 = document.createElement('div');
	const div3 = document.createElement('div');
	const div4 = document.createElement('div');
	const div5 = document.createElement('div');
	const div6 = document.createElement('div');
	const defaultInfo = {
		position: 'right-top',
		title: '提示',
		message: '我是提示框',
		type: 'Info',
		duration: 5000,
	};
	div1.style.cssText = 'position: fixed;max-height: 100%;';
	div1.id = 'Notification1';
	div1.style.zIndex = getMaxZIndex();
	obj.position = obj.position || defaultInfo.position;
	switch (obj.position) {
		case 'right-top':
			div1.style.top = '16px';
			div1.style.right = '16px';
			break;
		case 'right-bottom':
			div1.style.bottom = '16px';
			div1.style.right = '16px';
			break;
		case 'left-top':
			div1.style.left = '16px';
			div1.style.top = '16px';
			break;
		case 'left-bottom':
			div1.style.left = '16px';
			div1.style.bottom = '16px';
			break;
	}
	div2.style.cssText = 'width: 330px;padding: 14px 26px 14px 13px;background-color: #ffffff;border-radius: 8px;margin-bottom: 16px;position: relative;box-shadow: 0 0 16px rgba(0,0,0,0.15);box-sizing: border-box;opacity: 1;transition: height 0.5s ease-in,opacity 0.5s ease-in,padding 0.5s ease-in,margin-bottom 0.5s ease-in;overflow: hidden;';
	div2.id = div2ID;
	div3.style.cssText = 'display: flex;flex-direction: row;font-size: 16px;';
	let isType = '';
	let inHML = '';
	obj.type = obj.type || defaultInfo.type;
	switch (obj.type) {
		case 'Info':
		case 'info':
			isType = '#909399';
			inHML = '!';
			break;
		case 'Success':
		case 'success':
			isType = '#67c23a';
			inHML = '✓';
			break;
		case 'Warning':
		case 'warning':
			isType = '#e6a23c';
			inHML = 'i';
			break;
		case 'Error':
		case 'error':
			isType = '#f56c6c';
			inHML = '×';
			break;
	}
	div4.style.cssText = `width: 1.2em;height: 1.2em;border-radius: 50%;background-color: ${isType};font-size: 0.8em;text-align: center;line-height: 1.2em;color: #ffffff;`;
	div4.innerHTML = inHML;
	obj.title = obj.title || defaultInfo.title;
	div5.style.cssText = 'font-weight: 700;color: #333333;margin-left: 10px;';
	div5.innerHTML = obj.title;
	obj.message = obj.message || defaultInfo.message;
	div6.style.cssText = 'text-indent: 24px;font-size: 16px;color: #333333;margin-top: 10px;line-height: 24px;';
	div6.innerHTML = obj.message;
	div3.appendChild(div4);
	div3.appendChild(div5);
	div2.appendChild(div3);
	div2.appendChild(div6);
	if (document.getElementById('Notification1')) {
		if (obj.position === 'right-bottom' || obj.position === 'left-bottom') {
			document.getElementById('Notification1').insertBefore(div2, document.getElementById('Notification1').firstChild);
		} else {
			document.getElementById('Notification1').appendChild(div2);
		}
	} else {
		div1.appendChild(div2);
		document.body.appendChild(div1);
	}
	obj.duration = Number(obj.duration) || defaultInfo.duration;
	function removeDiv() {
		const length = document.getElementById('Notification1').childNodes.length;
		if (length === 0) {
			document.getElementById('Notification1').parentNode.removeChild(document.getElementById('Notification1'));
		}
	}
	function heightDiv2(id) {
		document.getElementById(id).style.height = `${document.getElementById(id).clientHeight}px`;
		setTimeout(() => {
			document.getElementById(id).style.height = '0px';
			document.getElementById(id).style.opacity = 0;
			document.getElementById(id).style.padding = '0 26px 0 13px';
			document.getElementById(id).style.marginBottom = '0px';
			setTimeout(() => {
				document.getElementById(id).parentNode.removeChild(document.getElementById(id));
				removeDiv();
			}, 500);
		}, obj.duration);
	}
	heightDiv2(div2ID);
}
