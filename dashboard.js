var parentfeelings = document.getElementById("parentfeelings");
var childfeelings = document.getElementById("childfeelings");
var grandchildfeelings = document.getElementById("grandchildfeelings");

function populatechildren(parentfeelings,childfeelings){
    childfeelings.innerHTML = "";
	if(parentfeelings.value == "Happy"){
		var optionArray = ["|","playful|Playful","content|Content","interested|Interested", "proud|Proud", "accepted|Accepted", "powerful|Powerful", "peaceful|Peaceful", "trusting|Trusting", "optimistic|Optimistic"];
	} else if(parentfeelings.value == "Sad"){
		var optionArray = ["|","lonely|Lonely", "vunerable|Vunerable", "despair|Despair", "guilty|Guilty", "depressed|Depressed", "hurt|Hurt"];
	} else if(parentfeelings.value == "Angry"){
		var optionArray = ["|","letdown|Letdown", "humiliated|Humiliated", "bitter|Bitter", "mad|Mad", "agressive|Agressive", "frustrated|Frustrated", "distant|Distant", "critical|Critical"];
	} else if(parentfeelings.value == "Surprised"){
		var optionArray = ["|","startled|Startled", "confused|Confused", "amazed|Amazed", "excited|Excited"];
	} else if(parentfeelings.value == "Bad"){
		var optionArray = ["|","bored|Bored", "busy|Busy", "stressed|Stressed", "tired|Tired"];
	} else if(parentfeelings.value == "Fearful"){
		var optionArray = ["|","scared|Scared", "anxious|Anxious", "insecure|Insecure", "weak|Weak", "rejected|Rejected", "threatened|Threatened"];
	}  else if(parentfeelings.value == "Disgusted"){
		var optionArray = ["|","disapproving|Disapproving", "disenchanted|Disenchanted", "awful|Awful", "repelled|Repelled"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		childfeelings.options.add(newOption);
	}
}




function populategrandchildren(childfeelings,grandchildfeelings){
	console.log("this is a function",grandchildfeelings)
    grandchildfeelings.innerHTML = "";
	if(childfeelings.value == "playful"){
		var optionArray = ["|","aroused|Aroused","cheeky|Cheeky"];
		console.log("you chose playful");
	} else if(childfeelings.value == "content"){
		var optionArray = ["|","free|Free", "joyful|Joyful"];
	} else if(childfeelings.value == "interested"){
		var optionArray = ["|","curious|Curious", "inquisitive|Inquisitive"];
	} else if(childfeelings.value == "Proud"){
		var optionArray = ["|","sucessful|Sucessful", "confident|Confident"];
	} else if(childfeelings.value == "accepted"){
		var optionArray = ["|","respected|Respected", "valued|Valued"];
	} else if(childfeelings.value == "powerful"){
		var optionArray = ["|","courageous|Courageous", "creative|Creative"];
	}  else if(childfeelings.value == "peaceful"){
		var optionArray = ["|","loving|Loving", "thankful|Thankful"];
	}else if(childfeelings.value == "trusting"){
		var optionArray = ["|","sensitive|Sensitive", "intimate|Intimate"];
	}  else if(childfeelings.value == "optimistic"){
		var optionArray = ["|","hopeful|Hopeful", "inspired|Inspired"];
	} else if(childfeelings.value == "lonely"){
		var optionArray = ["|","isolated|Isolated", "abandoned|Abandoned"];
	} else if(childfeelings.value == "vunerable"){
		var optionArray = ["|","victimized|Victimized", "fragile|Fragile"];
	} else if(childfeelings.value == "despair"){
		var optionArray = ["|","heartbroken|Heartbroken", "powerless|Powerless"];
	} else if(childfeelings.value == "guilty"){
		var optionArray = ["|","ashamed|Ashamed", "remorseful|Remorseful"];
	} else if(childfeelings.value == "depressed"){
		var optionArray = ["|","empty|Empty", "inferior|Inferior"];
	}  else if(childfeelings.value == "hurt"){
		var optionArray = ["|","embarassed|Embarassed", "disappointed|Disappointed"];
	}else if(childfeelings.value == "letdown"){
		var optionArray = ["|","betrayed|Betrayed", "resentful|Resentful"];
	}  else if(childfeelings.value == "humiliated"){
		var optionArray = ["|","disrespected|Disrespected", "ridiculed|Ridiculed"];
	}else if(childfeelings.value == "bitter"){
		var optionArray = ["|","indignant|Indignant", "violated|Violated"];
	}  else if(childfeelings.value == "mad"){
		var optionArray = ["|","furious|Furious", "jealous|Jealous"];
	}else if(childfeelings.value == "aggressive"){
		var optionArray = ["|","provoked|Provoked", "hostile|Hostile"];
	}  else if(childfeelings.value == "frustrated"){
		var optionArray = ["|","infuriated|Infuriated", "annoyed|Annoyed"];
	}else if(childfeelings.value == "distant"){
		var optionArray = ["|","withdrawn|Withdrawn", "numb|Numb"];
	}  else if(childfeelings.value == "critical"){
		var optionArray = ["|","skeptical|Skeptical", "dismissive|Dismissive"];
	}else if(childfeelings.value == "aggressive"){
		var optionArray = ["|","provoked|Provoked", "hostile|Hostile"];
	}  else if(childfeelings.value == "frustrated"){
		var optionArray = ["|","infuriated|Infuriated", "annoyed|Annoyed"];
	}else if(childfeelings.value == "distant"){
		var optionArray = ["|","withdrawn|Withdrawn", "numb|Numb"];
	}  else if(childfeelings.value == "critical"){
		var optionArray = ["|","skeptical|Skeptical", "dismissive|Dismissive"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		grandchildfeelings.options.add(newOption);
	}
}

// `shocked
// dismayed
// disillusioned
// perplexed
// astonished
// awestruck
// eager
// energic`

// `indifferent
// apathetic
// prressured
// rushed
// overwhelmed
// out of control
// sleepy
// unfocused`

// `helpless
// frightened
// stressed
// worried
// inadequate
// inferior
// worthless
// insignificnt
// excluded
// persecuted
// nervous
// exposed`

// `judgemental
// embarassed
// appalled
// revolted
// nauseated
// detestable
// horrified
// hesitant`








// `disapproving
// disappointed
// awful
// repelled`


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


// `aroused
// cheeky
// free
// joyful
// curious
// inquisitive
// sucessful
// confident
// respected
// valued
// courageous
// creative
// loving
// thankful
// sensitive
// intimate
// hopeful
// inspired`

// `isolated
// abandoned
// victimized
// fragile
// heartbroken
// powerless
// ashamed
// remorseful
// empty
// inferior

// `


// `betrayed
// resentful
// disrespected
// ridiculed
// indignant
// violated
// furious
// jealous
// provoked
// hostile
// infuriated
// annoyed
// withdrawn
// numb
// skeptical
// dismissive`
