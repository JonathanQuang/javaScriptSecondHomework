var theList = document.getElementById('thelist')
console.log(theList);

var addToList = function(){
	var node = document.createElement("LI");
	var textnode = document.createTextNode('hi');
	node.appendChild(textnode);
	theList.appendChild(node);	
};
