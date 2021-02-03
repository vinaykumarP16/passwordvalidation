document.addEventListener('DOMContentLoaded',()=>{
	const timeLeftDisplay=document.querySelector('#time-left');
	const startBtn=document.querySelector('#start-button');
	

	function countDown() {
		let timeLeft=document.getElementById('timer').value;
		setInterval(function(){
			if (timeLeft<=0) {
				clearInterval(timeLeft=0)
			}
			timeLeftDisplay.innerHTML=timeLeft;
			timeLeft-=1;
		},1000)

	}

	startBtn.addEventListener('click',countDown)
})