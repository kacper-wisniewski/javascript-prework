function printMessage(msg){
	// Stworzenie diva dla naszego tekstu
	let div = document.createElement('div');
	// Przypisanie divowi zawartości msg
	div.innerHTML = msg;
	// Przypisanie diva jako dziecko elementu o id 'message'
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}