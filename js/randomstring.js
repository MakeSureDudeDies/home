var textArray = [    
    'I like green',
    'That one guy that does stuff',
    'lua > python',
    'just wait for some vegetable to say raknet',
    'omg look funny minecraft font'
  ];

  var randomIndex = Math.floor(Math.random() * textArray.length);
  var randomElement = textArray[randomIndex];
  var element = document.getElementById("randomstring");

  function animateText(text, index, interval) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(function () {
        animateText(text, index, interval);
      }, interval);
    }
  }

  animateText(randomElement, 0, 100); // Adjust the interval as needed
