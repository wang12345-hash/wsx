/**
 * 克隆对象数据
 * @param { object } obj 需要克隆的对象
**/
export function deepClone(obj){
	return new Promise(function(resolve){
		const [port1,port2]=new MessageChannel();
		port1.postMessage(obj);
		port2.onmessage(function(msg){
			resolve(msg.data);
		})
	})
};