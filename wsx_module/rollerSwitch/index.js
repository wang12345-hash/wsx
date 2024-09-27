/**
 * 滚轮切页
 * @param {String} params.identifier 标识滚动区域
 * @param {Function} params.callback 回调函数
 * @param {String} params.type 滚动类型
 * @param {String} params.direction 方向
 * @param {Number,String} params.putOff 延迟时长
**/
import { notification } from "../notification/index.js";
export function rollerSwitch(params) {
    const obj = {
        identifier: "body",
        callback: null,
        type: "scroll",
        direction: "cross",
        putOff: 0
    };
    if (params) {
        Object.assign(obj, params);
    }
    const showErrorNotification = (message) => {
        notification({
            title: "提示",
            message: message,
            type: "error"
        });
    };
    const handleCallback = (e) => {
        if (obj.callback) {
            obj.callback(e);
        }
    };
    const elements = document.querySelectorAll(obj.identifier);
    if (elements.length !== 1) {
        showErrorNotification("传入的不是唯一标识");
        return;
    }
    const element = document.querySelector(obj.identifier);
    if (!element) {
        showErrorNotification("无效的标识");
        return;
    }
    const scrollFunction = obj.type === "scroll" ? (obj.direction === "cross" ? verticalPortrait : verticalCrosswise) :gradation;
    scrollFunction({
        identifier: obj.identifier,
        putOff: obj.putOff
    }, handleCallback);
}

function verticalPortrait(obj,callback) {
    const element = document.querySelector(obj.identifier);
    let currentPage = 0;
    let children = Array.from(element.children).filter(child=>child.tagName.toLowerCase() !== "script");
    let totalChildren = children.length;
    let isScrolling = false;
    let lastScrollTime = 0;
	let height=element.clientHeight;
	element.style.overflow="hidden";
	for(let i=0;i<totalChildren;i++){
		children[i].style.height=height+"px";
		children[i].style.width="100%";
	};
    function scrollHandler(event) {
        if (isScrolling) return;
        const currentTime = new Date().getTime();
        if (currentTime - lastScrollTime < Number(obj.putOff)) return;
        lastScrollTime = currentTime;
        isScrolling = true;
        if (event.deltaY > 0) {
            currentPage = Math.min(currentPage + 1, totalChildren - 1);
        } else {
            currentPage = Math.max(currentPage - 1, 0);
        }
        element.scrollTo({
            top: children[currentPage].offsetTop,
            left: 0,
            behavior: "smooth"
        });
		callback(currentPage);
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
    element.addEventListener("wheel", function(e) {
        e.preventDefault();
        scrollHandler(e);
    }, { passive: false });
}

function verticalCrosswise(obj,callback){
	const element = document.querySelector(obj.identifier);
	let currentPage = 0;
	let children = Array.from(element.children).filter(child=>child.tagName.toLowerCase() !== "script");
	let totalChildren = children.length;
	let isScrolling = false;
	let lastScrollTime = 0;
	element.style.cssText="display: flex;overflow: hidden;";
	let width=element.clientWidth;
	for(let i=0;i<totalChildren;i++){
		children[i].style.height="100%";
		children[i].style.width=width+"px";
		children[i].style.flex="0 0 auto";
	};
	function scrollHandler(event){
		if(isScrolling) return;
		const currentTime = new Date().getTime();
		if (currentTime - lastScrollTime < Number(obj.putOff)) return;
		lastScrollTime = currentTime;
		isScrolling = true;
		if (event.deltaY > 0) {
		    currentPage = Math.min(currentPage + 1, totalChildren - 1);
		} else {
		    currentPage = Math.max(currentPage - 1, 0);
		}
		element.scrollTo({
		    top: 0,
		    left: children[currentPage].offsetLeft,
		    behavior: "smooth"
		});
		callback(currentPage);
		setTimeout(() => {
		    isScrolling = false;
		}, 500);
	}
	element.addEventListener("wheel", function(e) {
	    e.preventDefault();
	    scrollHandler(e);
	}, { passive: false });
}

function gradation(obj,callback){
	const element = document.querySelector(obj.identifier);
	let currentPage = 0;
	let children = Array.from(element.children).filter(child=>child.tagName.toLowerCase() !== "script");
	let totalChildren = children.length;
	let isScrolling = false;
	let lastScrollTime = 0;
	element.style.position="relative";
	element.style.overflow="hidden";
	for(let i=0;i<totalChildren;i++){
		children[i].style.height="100%";
		children[i].style.width="100%";
		children[i].style.position="absolute";
		children[i].style.top=0;
		children[i].style.left=0;
		children[i].style.transition="opacity 1s ease";
		if(i===0){
			children[i].style.opacity=1;
			children[i].style.zIndex=1;
		}else{
			children[i].style.opacity=0;
			children[i].style.zIndex=0;
		}
	};
	function scrollHandler(event){
		if(isScrolling) return;
		const currentTime = new Date().getTime();
		if (currentTime - lastScrollTime < Number(obj.putOff)) return;
		lastScrollTime = currentTime;
		isScrolling = true;
		if (event.deltaY > 0) {
		    currentPage = Math.min(currentPage + 1, totalChildren - 1);
		} else {
		    currentPage = Math.max(currentPage - 1, 0);
		}
		for(let i=0;i<totalChildren;i++){
			if(i===currentPage){
				children[i].style.opacity=1;
				children[i].style.zIndex=1;
			}else{
				children[i].style.opacity=0;
				children[i].style.zIndex=0;
			}
		};
		callback(currentPage);
		setTimeout(() => {
		    isScrolling = false;
		}, 500);
	}
	element.addEventListener("wheel", function(e) {
	    e.preventDefault();
	    scrollHandler(e);
	}, { passive: false });
}