/**
 * loading加载动画
 * @param {String} color 加载loading颜色
**/
import { random } from "../random/index.js";
export function loading(color="rgba(50,111,241,1)"){
	const div1IDLoading=random(10,'str');
	const div2IDLoading=random(10,"str");
	const dialog=document.createElement("dialog");
	const div=document.createElement("div");
	const styleSerf=document.createElement("style");
	div.style.cssText=`width: 45px;height: 45px;background: ${color};-webkit-mask: radial-gradient( closest-side circle, ${color} 99%, transparent 100%) center top/25% 25% no-repeat,radial-gradient( closest-side circle, transparent 49%, red 50% 99%, transparent 100%),conic-gradient(transparent 10%, ${color} 90%);-webkit-mask-composite: source-over, source-in;animation: rotate 1s linear infinite;`;
	dialog.style.cssText = 'border: none;padding:0;background-color: rgba(0,0,0,0);border:none;outline: none;width: 100vw;height: 100vh;display: flex;flex-direction: row;justify-content: center;align-items: center;';
	styleSerf.innerHTML=`@keyframes rotate{to{transform: rotate(360deg);}}`;
	styleSerf.id=div1IDLoading;
	dialog.id=div2IDLoading;
	dialog.appendChild(div);
	return{
		show:()=>{
			if (!document.getElementById(div2IDLoading)) {
				if (document.documentElement.firstElementChild) {
					document.documentElement.firstElementChild.appendChild(styleSerf);
				} else {
					let wrap = document.createElement('div');
					wrap.appendChild(styleSerf);
					document.write(wrap.innerHTML);
					wrap = null;
				}
				document.body.appendChild(dialog);
			}
			dialog.showModal();
		},
		hide:()=>{
			if (document.getElementById(div2IDLoading)) {
				dialog.close();
				document.getElementById(div2IDLoading).parentNode.removeChild(document.getElementById(div2IDLoading));
				document.getElementById(div1IDLoading).parentNode.removeChild(document.getElementById(div1IDLoading));
			}
		}
	}
};