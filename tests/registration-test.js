describe("The registration numbers exercise", function(){
	describe("The addingRegs function", function(){
		it("should not add to local storage if input is empty", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555"])
			var input = "";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CJ 90909", "CL 760-555"]);
		});
		it("should  display 'enter a registration number' if input is empty", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555"]);
			var input = "";
			assert.deepEqual(theRegFunction.addingRegs2(input), "enter a registration number");
		});
		it("should  display 'success' if input is a valid registration", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555"]);
			var input = "CA 123";
			assert.deepEqual(theRegFunction.addingRegs2(input), "success");
		});
		it("should  display 'not a valid registration number' if input is an invalid registration", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555"]);
			var input = "CY 569";
			assert.deepEqual(theRegFunction.addingRegs2(input), "not a valid registration number");
		});
		it("should  display 'registration already entered' if input is a dublicate registration", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555"]);
			var input = "CA 888";
			assert.deepEqual(theRegFunction.addingRegs2(input), "registration already entered");
		});
		it("should add  the registration number CA 79247 to local storage", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555"])
			var input = "CA 79247";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247"]);
		});
		it("should add  the registration number CL 792 476 to local storage", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555", "CA 79247"])
			var input = "CL 792 476";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CL 792 476"]);
		});
		it("should add  the registration number CJ 888-256 to local storage", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555", "CA 79247"])
			var input = "CJ 888-256";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CJ 90909", "CL 760-555","CA 79247", "CJ 888-256"]);
		});
		it("should not add  the registration number CK 5556 to local storage", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CK 5556";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
		it("should not add  the registration number WP 457  to local storage", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "WP 457 ";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
		it("should not add  the registration number CY 900-123 to local storage", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CY 900 123";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
		it("should not push  the registration number CY 502 to local storage", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CA 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CY 502";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CA 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
		it("should not add  the registration number CA 90909 again  if its already been entered", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CA 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CA 90909";
			theRegFunction.addingRegs2(input);
			assert.deepEqual(theRegFunction.allTheRegs2(), ["CA 888", "CA 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
	
		
		
		describe("The radioSelected function should filter registrations for area selected", function(){
		it("should display all registration numbers", function(){
			let theRegFunction = TheRegistrations2(["CL 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"]);
			var buttonType = "all";
			assert.deepEqual(theRegFunction.optionSelected2(buttonType), ["CL 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"]);
		});
			
		it("should display all registrations starting with CA for Cape Town", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101"]);
			var buttonType = "CA";
	
			assert.deepEqual(theRegFunction.optionSelected2(buttonType), ["CA 888",  "CA 79247"]);
		});
		
		it("should display all registrations starting with CJ for Paarl", function(){
			let theRegFunction = TheRegistrations2(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743"]);
			var buttonType = "CJ";
		
			assert.deepEqual(theRegFunction.optionSelected2(buttonType), ["CJ 90909",  "CJ 888-256", "CJ 6743"]);
		});
		it("should display all registrations starting with CL for Stellenbosch", function(){
			let theRegFunction = TheRegistrations2(["CL 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"]);
			var buttonType = "CL";
			assert.deepEqual(theRegFunction.optionSelected2(buttonType), ["CL 888",  "CL 760-555", "CL 10101", "CL 666"]);
		});
	});
	});
});