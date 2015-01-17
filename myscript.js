function makeMyPagePretty() {

console.log("JavaScript is alive");

var greetingNode = document.getElementById('greeting');
greetingNode.addEventListener('click', function() {
  alert('hello the first time');
})


greetingNode.innerHTML = "Hi Planet Earth";

// greetingNode.innerHTML.onclick = function() {alert{"Hi There!") };

  function turnYellow() {
  var listItems = document.querySelectorAll("li");
  for (var i = 0; i < listItems.length; i++) {
    (listItems[i]).style.color = 'yellow';
    }
  }
}
  turnYellow();


//
// var buttonNode = document.getElementByTagName('input')[0]
// var ulNode = document.querySelector('#essentials ul')
//   buttonNode.onclick = function(){
//     var newElement = document.createElement('li');
//     newElement.innerHTML = "YO"
//     ulNode.appendChild(newElement);
//   }

document.onload = makeMyPagePretty;
