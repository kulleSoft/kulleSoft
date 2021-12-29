function add_numero(){
	
let numero = document.getElementById("input_numero").value
numero = ++numero;

if(numero >= 30){
	console.log("limite atingido");
	
}else{
	
	document.getElementById("input_numero").value=numero;	
	
	
}


	
}



function dim_numero(){
	
	
	let numero = document.getElementById("input_numero").value
numero = --numero;

if(numero <= 0){
	document.getElementById("input_numero").value="0";
	
}else{
	
	document.getElementById("input_numero").value=numero;	
	
	
}



}