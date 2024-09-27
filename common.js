import { loading } from "./wsx_module/loading/index.js";
import { random } from "./wsx_module/random/index.js";
import { getMaxZIndex } from "./wsx_module/getMaxZIndex/index.js";

const dialog=loading();
dialog.show();
setTimeout(function(){
	dialog.hide();
	document.getElementsByClassName("pagesShow")[0].style.transition="opacity 0.3s";
	document.getElementsByClassName("pagesShow")[0].style.opacity="1";
	document.getElementsByClassName("header")[0].style.cssText=`top: 0;opacity: 1;z-index: ${getMaxZIndex()};`;
},500);