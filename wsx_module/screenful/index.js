/**
 * 全屏&退出全屏
 *@param {String} id 需要全屏的区域
**/
export function screenful(id = null) {
	if (!id) {
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		} else if (document.documentElement.oRequestFullScreen) {
			document.documentElement.oRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen();
		}
		if (document.fullscreenElement !== null) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.oRequestFullScreen) {
				document.oRequestFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	} else {
		const full = document.getElementById(id);
		if (full.requestFullscreen) {
			full.requestFullscreen();
		} else if (full.mozRequestFullScreen) {
			full.mozRequestFullScreen();
		} else if (full.msRequestFullscreen) {
			full.msRequestFullscreen();
		} else if (full.oRequestFullScreen) {
			full.oRequestFullScreen();
		} else if (full.webkitRequestFullScreen) {
			full.webkitRequestFullScreen();
		}
		if (document.fullscreenElement !== null) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.oRequestFullScreen) {
				document.oRequestFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	}
}
