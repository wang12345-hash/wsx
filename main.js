// 配置公共方法
(function(window){
	if(navigator.userAgent.indexOf("Trident") > -1){
		var div=document.createElement("div");
		setTimeout(function(){
		    div.innerHTML="检查到您正在使用IE内核的浏览器访问，由于IE浏览器已于2022年6月15日停用<br/>详细<a href=\"https://www.microsoft.com/zh-CN/download/details.aspx?id=41628\" style=\"border-bottom:1px solid #0000ff;color: #0000ff;\" target=\"_blank\">https://www.microsoft.com/zh-CN/download/details.aspx?id=41628</a><br>请用更高的浏览器版本或其他的浏览器访问，给您带来不便，敬请见谅。";
		    div.style.cssText="width:100%;height:100%;position: fixed;left:0;top:0;padding: 50px 200px;box-sizing: border-box;text-align:center;line-height: 36px;font-size: 16px;color: #333333;z-index:99;background-color: #ffffff;";
		    document.body.appendChild(div);
		},100);
	}else{
		let obj=[
			{url:`${getHoust()}/common.css`,type:"css"}
		];
		let ico=document.createElement("link");
		ico.rel="shortcut icon";
		ico.type="image/x-icon";
		ico.href=`${getHoust()}/config.ico`;
		document.head.appendChild(ico);
		obj.forEach(item=>{
			switch (item.type){
				case "css":
					let css=document.createElement("link");
					css.rel="stylesheet";
					css.href=item.url;
					document.head.appendChild(css);
					break;
				default:
					let js=document.createElement("script");
					js.type="text/javascript";
					js.src=item.url;
					document.head.appendChild(js);
			}
		});
	}
	document.addEventListener("keydown",function(event){
	    var element=event.target;
	    if(event.key==="Backspace" && element.tagName==="INPUT" && element.type==="search"){
	        event.preventDefault();
	        var currentValue=element.value;
	        var selectionStart=element.selectionStart;
	        var selectionEnd=element.selectionEnd;
	        //如果有选中的文本，则删除选中的部分
	        if(selectionStart !== selectionEnd){
	            var newValue=currentValue.slice(0,selectionStart)+currentValue.slice(selectionEnd);
	            element.value=newValue;
	            element.setSelectionRange(selectionStart,selectionStart);
	        }
	        // 如果没有选中的文本，则删除光标前一个字符
	        else if(selectionStart>0){
	            var newValue=currentValue.slice(0,selectionStart - 1)+currentValue.slice(selectionStart);
	            element.value=newValue;
	            element.setSelectionRange(selectionStart-1,selectionStart-1);
	        }
	    }
	});
})(window);

function getHoust(){
	return "/wsx";
};