const buttons = document.querySelectorAll('button');
const crashAudio = new Audio("./sounds/crash.mp3");
const kickBassAudio = new Audio("./sounds/kick-bass.mp3");
const snareAudio = new Audio("./sounds/snare.mp3");
const tom1Audio = new Audio("./sounds/tom-1.mp3");
const tom2Audio = new Audio("./sounds/tom-2.mp3");
const tom3Audio = new Audio("./sounds/tom-3.mp3");
const tom4Audio = new Audio("./sounds/tom-4.mp3");
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
			tom1Audio.play();
			break;
		case 'a':
			tom2Audio.play();
			break;
		case 's':
			tom3Audio.play();
			break;
		case 'd':
			tom4Audio.play();
			break;
		case 'j':
			snareAudio.play();
			break;
		case 'k':
			crashAudio.play();
			break;
		case 'l':
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
