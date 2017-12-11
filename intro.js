//thelist
var theList = document.getElementById('thelist');
console.log('result from elementbyid thelist');
console.log(theList);

//for testing purposes
var maxItemNum = 8;


//add an element to the list
var addToList = function(){
	var node = document.createElement("LI");
	//creates <li></li> node
	var textnode = document.createTextNode('item ' + maxItemNum);
	maxItemNum++;
	//creates "hi"
	node.appendChild(textnode);
	//creates <li>hi</li>
	
	
	//add event listeners for newly added elements to list
	node.addEventListener('mouseover', changeHeading);
	node.addEventListener('mouseout', changeBack);
	node.addEventListener('click', removeElement);
	
	theList.appendChild(node);	
};

//when the btn is clicked, addToList is called 
b.addEventListener('click', addToList);


//heading
var heading = document.getElementById('h');
console.log('result from getElementById("h")');
console.log(heading);
console.log('result from heading.childNodes');
console.log(heading.childNodes);


//swap the original text in the header with the new text
var changeHeading = function(){
	var orighead = heading.childNodes[0];
	//console.log('result from this')
	//console.log(this)
	//this apparently refers to the node <li>item # </li>
	//console.log('result from this.childNodes');
	//console.log(this.childNodes);
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









