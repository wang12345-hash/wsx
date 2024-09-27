/*公共头*/
import { menuData } from "../../data/index.js";
import { cookie } from "../../wsx_module/cookie/index.js";
import { alert } from "../../wsx_module/alert/index.js";
export function head(id=null,num=0){
	var html=`
		<img src="${getHoust()}/Resource/imgs/icon/logo.png" alt="暂无图片" />
		<ul class="rowStartCenter">
			${setMenu(num)}
		</ul>
	`;
	if(id){
		const targetElement=document.getElementById(id);
		const newElement=document.createElement('div');
		newElement.classList="header rowBetweenCenter";
		newElement.innerHTML=html;
		if(targetElement.nextSibling){
			targetElement.parentNode.insertBefore(newElement,targetElement.nextSibling);
		}else{
			targetElement.parentNode.appendChild(newElement);
		};
		targetElement.remove();
	};
	const elements=document.querySelectorAll('[data-url]');
	elements.forEach((element,index)=>{
		element.addEventListener('click',function(){
			if(index===num){
				return;
			}else{
				let isUrl=this.getAttribute('data-url') || null;
				if(isUrl){
					const url=getHoust()+"/"+this.getAttribute('data-url');
					window.location.href=url;
				}else{
					alert('敬请期待！');
				}
			}
		})
	});
};

function setMenu(num){
	let html="";
	menuData.forEach((item,index)=>{
		html+='<li class="rowCenterCenter">';
		html+=	`<a class="${index===num?"Active":""}" data-url="${item.url}">`;
		html+=		'<div class="max-nav">';
		html+=			`<div>${item.name}</div>`;
		html+=			`<div>${item.en}</div>`;
		html+=		'</div>';
		html+=	'</a>';
		html+='</li>';
	});
	return html;
};