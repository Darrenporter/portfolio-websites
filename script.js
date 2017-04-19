var invalid = 0;
	//Username
	function validation() {
		invalid = 0;
		if(document.getElementById("name").value ==""){
			document.getElementById("invalid_1").innerHTML ="You must type in a name";
			invalid += 1;
		}
		else{
			document.getElementById("invalid_1").innerHTML ="";
		}

		//Email
		if((document.getElementById("email").value.indexOf("@")) == -1){
			document.getElementById("invalid_2").innerHTML = "Invalid Email";
			invalid += 1;
		}
		else{
			document.getElementById("invalid_2").innerHTML ="";
		}

		//Message
		if(document.getElementById("message").value ==""){
			document.getElementById("invalid_3").innerHTML ="Please enter your message.";
			invalid += 1;
		}
			else{
			document.getElementById("invalid_3").innerHTML ="";
		}

		if(invalid != 0){
			return false;
		}
		else{
			return true;
		}

	}