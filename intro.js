//thelist
var theList = document.getElementById('thelist')


//add an element to the list
var addToList = function(){
	var node = document.createElement("LI");
	var textnode = document.createTextNode('hi');
	node.appendChild(textnode);
	theList.appendChild(node);	
};

//when the btn is clicked, addToList is called 
b.addEventListener('click', addToList);


//heading
var heading = document.getElementById('h');


//swap the original text in the header with the new text
var changeHeading = function(){
	var orighead = heading.childNodes[0];
	var newhead1 = document.createTextNode(this.childNodes[0].nodeValue);
	h.innerHTML = this.childNodes[0].nodeValue;
}


//change the header back to "Hello World!""
var changeBack = function(){
	var worldtext = document.createTextNode("Hello World!");
	heading.replaceChild(worldtext, heading.childNodes[0]);
}

//remove an element from the DOM
var removeElement = function(){
	this.remove();
}

//a list containing all the list items in thelist 
var items = document.getElementsByTagName('li');

//loop through all items and initiate specific callback functions according to mouse actions
for (i=0; i<items.length; i++){
	items[i].addEventListener('mouseover', changeHeading);
	items[i].addEventListener('mouseout', changeBack);
	items[i].addEventListener('click', removeElement);
}









