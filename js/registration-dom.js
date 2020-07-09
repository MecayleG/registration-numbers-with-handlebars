const currRegs = localStorage["registrations"];
let numbers = [];
if(currRegs){
	numbers = JSON.parse(currRegs)
}
const theRegFunction = TheRegistrations(numbers);
const reg = document.querySelector(".regString");
const btn = document.getElementById("displayBtn");
const display = document.getElementById("regDisplay");
var checkedDrop = document.querySelector(".select");
const theList = document.getElementById("theList");

window.addEventListener("load", function(){
	displaying(theRegFunction.allTheRegs());
})
	//function that checks if regs are valid or not
function getRegistrations(){
var regVal = (reg.value).toUpperCase();

var toAdd = theRegFunction.addingRegs(regVal);
display.innerHTML = toAdd
 var noRep = theRegFunction.noRepeat(theRegFunction.allTheRegs());
 var toVal = theRegFunction.validate(regVal)


	if(toAdd === "success"){
		if(noRep){
			var li = document.createElement("li");
			theList.appendChild(li);
			li.innerHTML =  toVal;
			li.classList.add("color");
		} 
	}
	
		setTimeout(function(){
		display.innerHTML = "";
		}, 3000)
	reg.value = "";
	localStorage["registrations"] = JSON.stringify(theRegFunction.allTheRegs());
}
	// function that displays items according to radio button selected
function filter(){

var dropType = checkedDrop.value;
var radio = theRegFunction.optionSelected(dropType);
if(radio){
	theList.innerHTML = "";
		displaying(radio);
	}
}
function displaying(list){
	for( var i=0; i< list.length; i++){
		showReg(list[i])
	}
}
function showReg(item){
	var li = document.createElement("li");
			theList.appendChild(li);
			li.innerHTML =  item;
			li.classList.add("color")
}

btn.addEventListener("click", getRegistrations);
checkedDrop.addEventListener("change", filter)
