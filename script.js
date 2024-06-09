function(toCase){
	let a=text.toLowerCase();
	let b=text.toUpperCase();
	let c=a.concate("-");
	let d=c.concate(b);

	return d;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
