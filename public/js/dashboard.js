var parentfeelings = document.getElementById("parentfeelings");
var childfeelings = document.getElementById("childfeelings");
var grandchildfeelings = document.getElementById("grandchildfeelings");

function populatechildren(parentfeelings, childfeelings) {
  childfeelings.innerHTML = "";
  if (parentfeelings.value == "Happy") {
    var optionArray = [
      "|",
      "playful|Playful",
      "content|Content",
      "interested|Interested",
      "proud|Proud",
      "accepted|Accepted",
      "powerful|Powerful",
      "peaceful|Peaceful",
      "trusting|Trusting",
      "optimistic|Optimistic",
    ];
  } else if (parentfeelings.value == "Sad") {
    var optionArray = [
      "|",
      "lonely|Lonely",
      "vunerable|Vunerable",
      "despair|Despair",
      "guilty|Guilty",
      "depressed|Depressed",
      "hurt|Hurt",
    ];
  } else if (parentfeelings.value == "Angry") {
    var optionArray = [
      "|",
      "letdown|Letdown",
      "humiliated|Humiliated",
      "bitter|Bitter",
      "mad|Mad",
      "agressive|Agressive",
      "frustrated|Frustrated",
      "distant|Distant",
      "critical|Critical",
    ];
  } else if (parentfeelings.value == "Surprised") {
    var optionArray = [
      "|",
      "startled|Startled",
      "confused|Confused",
      "amazed|Amazed",
      "excited|Excited",
    ];
  } else if (parentfeelings.value == "Bad") {
    var optionArray = [
      "|",
      "bored|Bored",
      "busy|Busy",
      "stressed|Stressed",
      "tired|Tired",
    ];
  } else if (parentfeelings.value == "Fearful") {
    var optionArray = [
      "|",
      "scared|Scared",
      "anxious|Anxious",
      "insecure|Insecure",
      "weak|Weak",
      "rejected|Rejected",
      "threatened|Threatened",
    ];
  } else if (parentfeelings.value == "Disgusted") {
    var optionArray = [
      "|",
      "disapproving|Disapproving",
      "disenchanted|Disenchanted",
      "awful|Awful",
      "repelled|Repelled",
    ];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    childfeelings.options.add(newOption);
  }
}

function populategrandchildren(childfeelings, grandchildfeelings) {
  console.log("this is a function", grandchildfeelings);
  grandchildfeelings.innerHTML = "";
  if (childfeelings.value == "playful") {
    var optionArray = ["|", "aroused|Aroused", "cheeky|Cheeky"];
    console.log("you chose playful");
  } else if (childfeelings.value == "content") {
    var optionArray = ["|", "free|Free", "joyful|Joyful"];
  } else if (childfeelings.value == "interested") {
    var optionArray = ["|", "curious|Curious", "inquisitive|Inquisitive"];
  } else if (childfeelings.value == "Proud") {
    var optionArray = ["|", "sucessful|Sucessful", "confident|Confident"];
  } else if (childfeelings.value == "accepted") {
    var optionArray = ["|", "respected|Respected", "valued|Valued"];
  } else if (childfeelings.value == "powerful") {
    var optionArray = ["|", "courageous|Courageous", "creative|Creative"];
  } else if (childfeelings.value == "peaceful") {
    var optionArray = ["|", "loving|Loving", "thankful|Thankful"];
  } else if (childfeelings.value == "trusting") {
    var optionArray = ["|", "sensitive|Sensitive", "intimate|Intimate"];
  } else if (childfeelings.value == "optimistic") {
    var optionArray = ["|", "hopeful|Hopeful", "inspired|Inspired"];
  } else if (childfeelings.value == "lonely") {
    var optionArray = ["|", "isolated|Isolated", "abandoned|Abandoned"];
  } else if (childfeelings.value == "vunerable") {
    var optionArray = ["|", "victimized|Victimized", "fragile|Fragile"];
  } else if (childfeelings.value == "despair") {
    var optionArray = ["|", "heartbroken|Heartbroken", "powerless|Powerless"];
  } else if (childfeelings.value == "guilty") {
    var optionArray = ["|", "ashamed|Ashamed", "remorseful|Remorseful"];
  } else if (childfeelings.value == "depressed") {
    var optionArray = ["|", "empty|Empty", "inferior|Inferior"];
  } else if (childfeelings.value == "hurt") {
    var optionArray = [
      "|",
      "embarassed|Embarassed",
      "disappointed|Disappointed",
    ];
  } else if (childfeelings.value == "letdown") {
    var optionArray = ["|", "betrayed|Betrayed", "resentful|Resentful"];
  } else if (childfeelings.value == "humiliated") {
    var optionArray = ["|", "disrespected|Disrespected", "ridiculed|Ridiculed"];
  } else if (childfeelings.value == "bitter") {
    var optionArray = ["|", "indignant|Indignant", "violated|Violated"];
  } else if (childfeelings.value == "mad") {
    var optionArray = ["|", "furious|Furious", "jealous|Jealous"];
  } else if (childfeelings.value == "aggressive") {
    var optionArray = ["|", "provoked|Provoked", "hostile|Hostile"];
  } else if (childfeelings.value == "frustrated") {
    var optionArray = ["|", "infuriated|Infuriated", "annoyed|Annoyed"];
  } else if (childfeelings.value == "distant") {
    var optionArray = ["|", "withdrawn|Withdrawn", "numb|Numb"];
  } else if (childfeelings.value == "critical") {
    var optionArray = ["|", "skeptical|Skeptical", "dismissive|Dismissive"];
  } else if (childfeelings.value == "startled") {
    var optionArray = ["|", "shocked|Shocked", "dismayed|Dismayed"];
  } else if (childfeelings.value == "confused") {
    var optionArray = [
      "|",
      "disillusioned|Dissillusioned",
      "perplexed|Perplexed",
    ];
  } else if (childfeelings.value == "amazed") {
    var optionArray = ["|", "astonished|Astonished", "awestruck|Awestruck"];
  } else if (childfeelings.value == "excited") {
    var optionArray = ["|", "eager|Eager", "energetic|Energetic"];
  } else if (childfeelings.value == "bored") {
    var optionArray = ["|", "indifferent|Indifferent", "apathetic|Apathetic"];
  } else if (childfeelings.value == "busy") {
    var optionArray = ["|", "pressured|Pressured", "rushed|Rushed"];
  } else if (childfeelings.value == "stressed") {
    var optionArray = [
      "|",
      "overwhelmed|Overwhelmed",
      "outofcontrol|Out of control",
    ];
  } else if (childfeelings.value == "tired") {
    var optionArray = ["|", "sleepy|Sleepy", "unfocused|Unfocused"];
  } else if (childfeelings.value == "scared") {
    var optionArray = ["|", "helpless|Helpless", "frightened|Frightened"];
  } else if (childfeelings.value == "anxious") {
    var optionArray = ["|", "stressed|Stressed", "worried|Worried"];
  } else if (childfeelings.value == "insecure") {
    var optionArray = ["|", "inadequate|Inadequate", "inferior|Inferior"];
  } else if (childfeelings.value == "weak") {
    var optionArray = [
      "|",
      "worthless|Worthless",
      "insignificant|Insignificant",
    ];
  } else if (childfeelings.value == "rejected") {
    var optionArray = ["|", "excluded|Excluded", "persecuted|Persecuted"];
  } else if (childfeelings.value == "threatened") {
    var optionArray = ["|", "nervous|Nervous", "exposed|Exposed"];
  } else if (childfeelings.value == "disapproving") {
    var optionArray = ["|", "judgemental|Judgemental", "humiliated|Humiliated"];
  } else if (childfeelings.value == "disenchanted") {
    var optionArray = ["|", "appaled|Appaled", "revolted|Revolted"];
  } else if (childfeelings.value == "awful") {
    var optionArray = ["|", "nauseated|Nauseated", "detestable|Detestable"];
  } else if (childfeelings.value == "repelled") {
    var optionArray = ["|", "horrified|Horrified", "hesitant|Hesitant"];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    grandchildfeelings.options.add(newOption);
  }
}

<<<<<<< HEAD
=======
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
>>>>>>> 0c74f05b56f5fd1b4474b7f095c407f27686b918

var emotions = [0, 0, 0];
function incrementChart(parentfeelings) {
  if (parentfeelings == "Happy") {
    emotions[0]++;
  } else if (parentfeelings == "sad") {
    emotions[1]++;
  } else if (parentfeelings == "angry") {
    emotions[2]++;
  }

  console.log(updatedEmotions);
  renderChart(emotions);
}
// console.log(emotions)

function renderChart(Arr) {
  const data = {
    labels: ["Happy", "Sad", "Angry"],

    datasets: [
      {
        label: "My First Dataset",
        data: [Arr[0], Arr[1], Arr[2]],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255,255,255)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}

incrementChart("angry");
