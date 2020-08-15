let content = document.querySelector('#content');

function createElement({tag, id, classe}) {
	new_element =  document.createElement(tag)
	if (id != undefined) {
		new_element.id = id	
	}
	if (classe != undefined) {
		new_element.className = classe	
	}
	
	return new_element
}

async function loadGames(){
	
	const data = await getData()
	
}

loadGames()