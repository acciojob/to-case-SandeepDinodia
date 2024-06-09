function toCase(text){
	let a=text.toLowerCase();
	let b=text.toUpperCase();
	let c=a.concat("-");
	let d=c.concat(b);

	return d;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
