function TheRegistrations2(allRegs2){
	var numberPlates2 = allRegs2 || [];
	var msg2 = "";
	
	
	//function that does not add empty input and adds all valid registrations to array
	function addingRegs2(input2){
		if(input2 !== ""){
			if( !numberPlates2.includes(input2)){
				if(/C[ALJ] \d{3,5}$/.test(input2) || /C[ALJ] \d+\s|-\d+$/.test(input2)){
				numberPlates2.push(input2)
				msg2 = "success";
				} 
				else{ msg2 = "not a valid registration number";
				
				}
			}
			else {
				msg2 = "registration number already entered";
			}
		} 
		else {
			msg2 = "enter a registration number";
		}		
		return msg2;	
	}


	// function displaying registrations according to radio button selected
	function optionSelected2(selectType2){
		if( selectType2 == "all"){
			return numberPlates2;
		}
		else {
			var list2 = [];
			for(var i = 0; i<numberPlates2.length; i++){

				if(numberPlates2[i].startsWith(selectType2)){

					list2.push(numberPlates2[i])
				} 
			}
			return list2;
		}
	}
	//function returning theRegs
	function allTheRegs2(){
		return numberPlates2;
	}
	return{
		addingRegs2,
		optionSelected2,
		allTheRegs2
	}
}