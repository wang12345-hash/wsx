/**
 * alert框
 * @param {String} message 提示文字
 * @param {Function} callback 确定的回调函数
 * @param {String} type 类型
 * @param {String} title 标题
**/
import { random } from '../random/index.js';
export function alert(message, callback = null, type = 'info', title = '提示') {
	const div2ID = random(10);
	// 创建容器
	const div1_1 = document.createElement('div');// 弹窗容器
	const div1_1_1 = document.createElement('div');// 标题盒子
	const div1_1_1_1 = document.createElement('div');// 图标
	const div1_1_1_2 = document.createElement('div');// 标题
	const div1_1_2 = document.createElement('div');// 内容盒子
	const div1_1_2_1 = document.createElement('div');// 内容
	const div1_1_3 = document.createElement('div');// 按钮盒子
	const button = document.createElement('button');// 按钮
	const dialog = document.createElement('dialog');// 浏览器弹窗
	// 给容器设置样式
	div1_1.style.cssText = `width: 420px;height: auto;min-height: 160px;padding: 24px;box-sizing: border-box;background-color: #ffffff;box-shadow: 0 0 10px rgba(0,0,0,0.1);position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 4px;`;
	div1_1_1.style.cssText = `display: flex;flex-direction: row;justify-content: flex-start;align-items: center;padding-top: 16px;box-sizing: border-box;width: 100%;height: 40px;`;
	div1_1_1_1.style.cssText = `width: 21px;height: 21px;margin: 0 13.5px;background-color: ${type === 'success' ? '#27C777' : type === 'info' ? '#326FF1' : type === 'error' ? '#F54A45' : '#FAC022'};border-radius: 50%;line-height: 21px;text-align: center;font-weight: bold;color: #ffffff;`;
	div1_1_1_2.style.cssText = `font-size: 16px;color: #262A30;`;
	div1_1_2.style.cssText = `width: 100%;height: auto;min-height: 36px;margin-top: 4px;padding-left: 48px;box-sizing: border-box;`;
	div1_1_2_1.style.cssText = `line-height: 20px;font-size: 14px;color: #5C626B;`;
	div1_1_3.style.cssText = `display: flex;flex-direction: row;justify-content: flex-end;align-items: center;`;
	button.style.cssText = `outline: none;border: none;background-color: #326FF1;width: 74px;height: 32px;text-align: center;line-height: 32px;color: #ffffff;font-size: 14px;border-radius: 6px;cursor: pointer;`;
	dialog.style.cssText = 'position: fixed;top: 0;left: 0;height: 100%;width: 100%;border: none;padding:0;background-color: rgba(0,0,0,0);';
	// 给容器赋值
	div1_1_1_1.innerHTML = type === 'error' ? 'x' : type === 'success' ? '✔' : '!';
	div1_1_1_2.innerHTML = title;
	div1_1_2_1.innerHTML = message;
	button.innerHTML = '我知道了';
	dialog.id = div2ID;
	// 合并
	div1_1_1.appendChild(div1_1_1_1);
	div1_1_1.appendChild(div1_1_1_2);
	div1_1_2.appendChild(div1_1_2_1);
	div1_1_3.appendChild(button);
	div1_1.appendChild(div1_1_1);
	div1_1.appendChild(div1_1_2);
	div1_1.appendChild(div1_1_3);
	dialog.appendChild(div1_1);
	document.body.appendChild(dialog);
	dialog.showModal();
	// 处理按钮事件
	button.onclick = (event) => {
		dialog.close();
		document.getElementById(div2ID).parentNode.removeChild(document.getElementById(div2ID));
		if (callback) {
			callback();
		}
		event.stopPropagation();
	};
}
