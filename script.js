let inputofp = document.getElementById("noofp");
let btn = document.getElementsByClassName("b1")[0];

btn.addEventListener("click",function send(){
	if(inputofp.value > 0)
	{
		export const noof = inputofp.value;
        let noofp = inputofp.value;
		inputofp.value = "" ;
	}
});
