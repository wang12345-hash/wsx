/**
 * 公共库统一出口
 * 注意：该公共库已不再兼容IE，请谨慎使用
 * 备注：如果需要兼容IE，请自行去修改源码，源码也很简单的
**/
import { rem } from './rem/index.js';
import { random } from './random/index.js';
import { notification } from './notification/index.js';
import { cookie } from './cookie/index.js';
import { numberString } from './numberString/index.js';
import { ez } from './ez/index.js';
import { screenful } from './screenful/index.js';
import { systemTime } from './systemTime/index.js';
import { isPath } from './isPath/index.js';
import { viewpager } from './viewpager/index.js';
import { getSearchString } from './getSearchString/index.js';
import { ajax } from './ajax/index.js';
import { appointScroll } from './appointScroll/index.js';
import { alert } from './alert/index.js';
import { confirm } from './confirm/index.js';
import { loading } from './loading/index.js';
import { countdown } from './countdown/index.js';
import { rollerSwitch } from './rollerSwitch/index.js';
import { getMaxZIndex } from "./getMaxZIndex/index.js";

const wsx = {
	rem,
	random,
	notification,
	cookie,
	numberString,
	ez,
	screenful,
	systemTime,
	isPath,
	viewpager,
	getSearchString,
	ajax,
	appointScroll,
	alert,
	confirm,
	loading,
	countdown,
	rollerSwitch,
	getMaxZIndex
};

// 导出这个对象，以便其他 ES6 模块可以通过 import 使用它
export default wsx;

// 检查是否在浏览器环境中，并且是否在模块环境中
// 使用：<script type="module" src="你的文件路径/wsx_module/index.js"></script>
if (typeof window !== 'undefined' && typeof window.document !== 'undefined' && !window.wsx) {
    // 如果不是通过模块系统加载的（比如直接通过 <script> 标签），则把对象挂载到全局变量上
	window.wsx = wsx;
}
