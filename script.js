function toCase(text) {
  // write your code here
	text=text.toLowerCase()
	let uppertext=text.toUpperCase();
	return `${text}-${uppertext}`;
}

// DO not change the code below

 const text = prompt("Enter text:");
alert(toCase(text));
