var theList = document.getElementById('thelist')


var addToList = function(){
	var node = document.createElement("LI");
	var textnode = document.createTextNode('hi');
	node.appendChild(textnode);
	theList.appendChild(node);	
};

b.addEventListener('click', addToList);

// -------------------------------------------------//

var heading = document.getElementById('h');

var changeBack = function(){

	var worldtext = document.createTextNode("Hello Worldddd!");
	heading.replaceChild(worldtext, heading.childNodes[0]);
}


var e = "hyyy";

var DisplayItemName = function(){
	var itemL = document.getElementsByTagName('li');
	var len = itemL.length;
	for (i = 0; i < len; i++){
		itemL[i].addEventListener('mouseover', callback);
		e = i;
		//document.getElementsByTagName('li')[i].childNodes[0].getValue;
		itemL[i].addEventListener('mouseout', changeBack);
	}
}


var changeHeading = function(e){
	var orighead = heading.childNodes[0];
	var newhead = document.createTextNode(e);
	h.replaceChild(newhead, orighead);
}


var callback = function(){
	changeHeading(e);
}

DisplayItemName();


// var e = theList.childNodes[1].childNodes[0].nodeValue;
// theList.childNodes[1].addEventListener('mouseover', callback);
// theList.childNodes[1].addEventListener('mouseleave', changeBack);


// e = theList.childNodes[3].childNodes[0].nodeValue;
// theList.childNodes[3].addEventListener('mouseover', callback);
// theList.childNodes[3].addEventListener('mouseleave', changeBack);




