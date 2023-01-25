const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
	button.addEventListener('click', ()=>{
		handleSound(button.textContent);
		buttonAnimation(button.textContent);
	});
})
document.addEventListener('keydown', function(e){
	handleSound(e.key);
	buttonAnimation(e.key);
});
function handleSound(value){
	switch(value)
	{
		case 'w':
			const tom1Audio = new Audio("./sounds/tom-1.mp3");
			tom1Audio.play();
			break;
		case 'a':
			const tom2Audio = new Audio("./sounds/tom-2.mp3");
			tom2Audio.play();
			break;
		case 's':
			const tom3Audio = new Audio("./sounds/tom-3.mp3");
			tom3Audio.play();
			break;
		case 'd':
			const tom4Audio = new Audio("./sounds/tom-4.mp3");
			tom4Audio.play();
			break;
		case 'j':
			const snareAudio = new Audio("./sounds/snare.mp3");
			snareAudio.play();
			break;
		case 'k':
			const crashAudio = new Audio("./sounds/crash.mp3");
			crashAudio.play();
			break;
		case 'l':
			const kickBassAudio = new Audio("./sounds/kick-bass.mp3");
			kickBassAudio.play();
			break;
	}
}
function buttonAnimation(currentKey){
	const active = document.querySelector(`.${currentKey}`);
	active.classList.add("pressed");
	setTimeout(()=>{
		active.classList.remove("pressed");
	}, 100);
}
