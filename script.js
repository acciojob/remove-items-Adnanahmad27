//your JS code here. If required.
const colorSelect = document.querySelector("#colorSelect");
const btn = document.querySelector('input');
btn.addEventListener("click", () => {
	const colorSelected = colorSelect.value;
	options = colorSelect.options;

	
	for(let i = 0 ; i < options.length ; i++){
		
		if(options[i].innerText === colorSelected){
			colorSelect.remove(i);
			break;
		}
	}
});