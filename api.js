function load(element, speed, condition){
	var style = document.body.appendChild(document.createElement('style'));
	style.type='text/css';
	style.innerHTML=`
@keyframes rloading{
	from{
		transform:rotate(0deg)
	}
	to{
		transform:rotate(360deg)
	}
}`
	element.style.animation = `rloading ${speed}s infinite linear`;
	return new Promise((resolve, reject) => {
		var interval = setInterval(function(){
			if(condition()){
				style.remove();
				clearInterval(interval);
				resolve();
			}
		},500)
	});;
}
