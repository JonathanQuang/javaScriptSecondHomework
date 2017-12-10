var theList = document.getElementById('thelist')
var heading = document.getElementById('h')

//console.log(theList);

var addToList = function(){
	var node = document.createElement("LI");
	var textnode = document.createTextNode('hi');
	node.appendChild(textnode);
	theList.appendChild(node);	
};

b.addEventListener('click', addToList);


// -------------------------------------------------//
//this is not finished yet...:///

var changeHeading = function(e){
	var textnode = document.createTextNode(e);
	var item = document.getElementById('h');
	h.replaceChild(textnode, item.childNodes[0]);
}

var callback = function(){
	changeHeading(e);
}


var changeBack = function(){
	var worldtext = document.createTextNode("Hello Worldddd!");
	heading.replaceChild(worldtext, heading.childNodes[0]);
}


var e = theList.childNodes[1].childNodes[0].nodeValue;
theList.childNodes[1].addEventListener('mouseover', callback);
theList.childNodes[1].addEventListener('mouseleave', changeBack);


e = theList.childNodes[3].childNodes[0].nodeValue;
theList.childNodes[9].addEventListener('mouseover', callback);
//theList.childNodes[3].addEventListener('mouseleave', changeBack);




