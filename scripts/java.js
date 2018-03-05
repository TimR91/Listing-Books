// var background = document.getElementById('div1 ');
// background.addEventListener('mouseover', changeBackground);
// background.addEventListener('mouseout', revert);
eventListeners('div1');
eventListeners('div2');
eventListeners('div3');
eventListeners('div4');
eventListeners('div5');
eventListeners('div6');
eventListeners('div7');
eventListeners('div8');
eventListeners('div9');
eventListeners('div10');
eventListeners('div11');
eventListeners('div12');



function eventListeners(mydiv) {
  var background2 = document.getElementById(mydiv);
  background2.addEventListener('mouseover', changeBackground);
  background2.addEventListener('mouseout', revert);
}

function changeBackground(event) {
  event.currentTarget.style.backgroundColor = 'Gold';

  //background2.style.backgroundColor= '#202020';
}

function revert(event) {
  // if  == background)
  event.currentTarget.style.backgroundColor = 'darkolivegreen';
  // else
  // background2.style.backgroundColor = 'darkolivegreen';
}
