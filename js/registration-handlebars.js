const currRegs2 = localStorage["registrations2"];
let numbers2 = [];
if(currRegs2){
	numbers2 = JSON.parse(currRegs2)
}
			//reference to elements
const regFunction = TheRegistrations2(numbers2);
const input = document.querySelector(".regString2");
const button = document.getElementById("displayBtn2");
const msg = document.getElementById("regDisplay2");
var dropDown = document.querySelector(".select2");
const ul = document.getElementById("theList2");
			//handlebars
var theTemp = document.querySelector(".regTemplate").innerHTML;
var list = document.querySelector(".theList2");
var compilation = Handlebars.compile(theTemp);

			//display previous regs
	window.addEventListener("load", function(){
		var each = { reg: regFunction.allTheRegs2()};
		list.innerHTML = compilation(each);
	});

	//calling factory functions
function getRegistrations2(){
	var regVal2 = (input.value).toUpperCase();
	var add = regFunction.addingRegs2(regVal2);
	msg.innerHTML = add;

	if(add === "success"){
	
		var each = {reg: regFunction.allTheRegs2()}
		list.innerHTML = compilation(each)
	} 
	setTimeout(function(){
		msg.innerHTML = "";
	}, 3000)
	input.value = "";
	localStorage["registrations2"] = JSON.stringify(regFunction.allTheRegs2());
}
	// function that displays items according to radio button selected
function filter2(){

	var dropType2 = dropDown.value;
	var select = regFunction.optionSelected2(dropType2);

		var each = {
		reg: select
		}
	list.innerHTML = compilation(each);
}

button.addEventListener("click", getRegistrations2);
dropDown.addEventListener("change", filter2)
