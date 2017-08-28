var langMenu = document.querySelector('.lang-menu');


var eng = {
	'.main-m-items': ['ABOUT', 'EVENTS', 'REPERTOIRE', 'MEDIA', 'CONTACTS'],
	'#intro-par': `The Trio Energico ensemble was founded in January 2015 by three enthusiastic students of
				   the Franz Liszt Academy of Music. Due to their vitality, explosive energy, deep dedication
				   and passion to music, they are already prize winners of more national and international
				   competitions, along with lots of performances and concert series in Hungary and abroad.
				   The motivation of the ensemble is to bring the world of classical music closer to people
				   abd to share the love of chamber music with the audience.`
};


var ger = {


};


var it = {


};


var langObjects = [eng, ger, it];


var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  { 
  	acceptNode: function(node) {

  		if(node.children.length !== 0 || node.textContent == '') return NodeFilter.FILTER_SKIP;

		else return NodeFilter.FILTER_ACCEPT; }
  	}

);

var nodes = [];
while(treeWalker.nextNode()) nodes.push(treeWalker.currentNode);
console.log(nodes);




function translate(){



	return true;
};




langMenu.addEventListener('click', function(e){

	var targetLang = e.target.textContent.toLowerCase();

	switch(true){

		case targetLang == 'hun':
		// set the language back to default language - hu -  of the html //
		console.log('hun clicked!');
		break;

		case targetLang == 'eng':
		translate.apply(eng, null);
		console.log('eng clicked!');
		break;

		case targetLang == 'ger':
		translate.apply(ger, null);
		console.log('ger clicked!');
		break;

		case targetLang == 'it':
		translate.apply(it, null);
		console.log('it clicked!');
		break;

	}


})