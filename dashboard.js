function populate(parentfeelings,childfeelings){
	var parentfeelings = document.getElementById("parentfeelings");
	var childfeelings = document.getElementById("childfeelings");
	childfeelings.innerHTML = "";
	if(parentfeelings.value == "Happy"){
		var optionArray = ["|","playful|Playful","content|Content","interested|Interested", "proud|Proud", "accepted|Accepted", "powerful|Powerful", "peaceful|Peaceful", "trusting|Trusting", "optimistic|Optimistic"];
	} else if(parentfeelings.value == "Sad"){
		var optionArray = ["|","lonely|Lonely", "vunerable|Vunerable", "despair|Despair", "guilty|Guilty", "depressed|Depressed", "hurt|Hurt"];
	} else if(parentfeelings.value == "Angry"){
		var optionArray = ["|","letdown|Letdown", "humiliated|Humiliated", "bitter|Bitter", "mad|Mad", "agressive|Agressive", "frustrated|Frustrated", "distant|Distant", "critical|Critical"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		childfeelings.options.add(newOption);
	}
}

// `playful
// content
// interested
// proud
// accepted
// powerful
// peaceful
// trusting
// optimistic`

// `lonely
// vunerable
// despair
// guilty
// depressed
// hurt`

// `letdown
// humiliated
// bitter
// mad
// agressive
// frustrated
// distant
// critical`

// `startled
// confused
// amazed
// excited`

// `bored
// busy
// stressed
// tired`

// `scared
// anxious
// insecure
// weak
// rejected
// threatened`

// `disapproving
// disappointed
// awful
// repelled`