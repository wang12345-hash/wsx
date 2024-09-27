/**
 * 确认框
 * @param {String} message 提示信息
 * @param {Function} callback 确定的回调函数
 * @param {String} title 标题
**/
import { random } from '../random/index.js';
export function confirm(message, callback = null, title = '提示') {
	const div2ID = random(10);
	// 创建容器
	const div1 = document.createElement('div');// 遮罩
	const div1_1 = document.createElement('div');// 弹窗容器
	const div1_1_1 = document.createElement('div');// 标题盒子
	const div1_1_1_1 = document.createElement('div');// 图标
	const div1_1_1_2 = document.createElement('div');// 标题
	const div1_1_2 = document.createElement('div');// 内容盒子
	const div1_1_2_1 = document.createElement('div');// 内容
	const div1_1_3 = document.createElement('div');// 按钮盒子
	const button1 = document.createElement('button');// 取消按钮
	const button2 = document.createElement('button');// 取消按钮
	const dialog = document.createElement('dialog');// 浏览器弹窗
	// 给容器设置样式
	div1_1.style.cssText = `width: 420px;height: auto;min-height: 160px;padding: 24px;box-sizing: border-box;background-color: #ffffff;box-shadow: 0 0 10px rgba(0,0,0,0.1);position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 4px;`;
	div1_1_1.style.cssText = `display: flex;flex-direction: row;justify-content: flex-start;align-items: center;padding-top: 16px;box-sizing: border-box;width: 100%;height: 40px;`;
	div1_1_1_1.style.cssText = `width: 21px;height: 21px;margin: 0 13.5px;background-color: #326FF1;border-radius: 50%;line-height: 21px;text-align: center;font-weight: bold;color: #ffffff;`;
	div1_1_1_2.style.cssText = `font-size: 16px;color: #262A30;`;
	div1_1_2.style.cssText = `width: 100%;height: auto;min-height: 36px;margin-top: 4px;padding-left: 48px;box-sizing: border-box;`;
	div1_1_2_1.style.cssText = `line-height: 20px;font-size: 14px;color: #5C626B;`;
	div1_1_3.style.cssText = `display: flex;flex-direction: row;justify-content: flex-end;align-items: center;`;
	button1.style.cssText = `outline: none;border: none;background-color: #ffffff;width: 74px;height: 32px;text-align: center;line-height: 32px;color: #333333;font-size: 14px;border-radius: 6px;cursor: pointer;border: 1px solid #cbcfd6;`;
	button2.style.cssText = `outline: none;border: none;background-color: #326FF1;width: 74px;height: 32px;text-align: center;line-height: 32px;color: #ffffff;font-size: 14px;border-radius: 6px;cursor: pointer;margin-left: 8px;`;
	dialog.style.cssText = 'position: fixed;top: 0;left: 0;height: 100%;width: 100%;border: none;padding:0;background-color: rgba(0,0,0,0);';
	// 给容器赋值
	div1_1_1_1.textContent = '!';
	div1_1_1_2.textContent = title;
	div1_1_2_1.innerHTML = message;
	button1.textContent = '取消';
	button2.textContent = '确定';
	dialog.id = div2ID;
	// 合并
	div1_1_1.appendChild(div1_1_1_1);
	div1_1_1.appendChild(div1_1_1_2);
	div1_1_2.appendChild(div1_1_2_1);
	div1_1_3.appendChild(button1);
	div1_1_3.appendChild(button2);
	div1_1.appendChild(div1_1_1);
	div1_1.appendChild(div1_1_2);
	div1_1.appendChild(div1_1_3);
	dialog.appendChild(div1_1);
	document.body.appendChild(dialog);
	dialog.showModal();
	// 处理按钮事件
	button1.onclick = (event) => {
		dialog.close();
		document.getElementById(div2ID).parentNode.removeChild(document.getElementById(div2ID));
		event.stopPropagation();
	};
	button2.onclick = (event) => {
		dialog.close();
		document.getElementById(div2ID).parentNode.removeChild(document.getElementById(div2ID));
		if (callback) {
			callback();
		}
		event.stopPropagation();
	};
}
