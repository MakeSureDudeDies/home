var textArray = [    
'I like green',    
'That one guy that does stuff',
'lua > python'
];
var randomIndex = Math.floor(Math.random() * textArray.length); 
var randomElement = textArray[randomIndex];
document.getElementById("randomstring").innerHTML = randomElement;
