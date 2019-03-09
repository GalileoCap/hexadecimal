//****************
//S: Configuracion

const valores= "0123456789ABCDEF";

//***************************************
//S: Transformar de binario a hexadecimal
//XXX: Solo funciona si recibe un string

function escribir_hex(d){ //U: Me devuelve el digito hexadecimal correcto para mi número (ej: 15=F)
	var	r= d % 16;
	if (d - r == 0){
		return valores[r];
	}	else {
	console.error("ERROR escribir_hex, d, d % 16", d, r);
	return false;
	}
}

function bin_a_dec(bin){ //U: Pasa de binario de cuatro digitos a decimal.
	var	r= 0;
	for (var j = 0; j < bin.length; j++){
		var d= bin[bin.length-1-j]; //A: Lo reviso de la posicion 3 a la posicion 0
		if (d == 1){
			r+= 2**j; //E: 0001 = 2**0 = 1	
		}
	}
	return r; //A: Devuelve un int
}

function bin_a_hex(bin){ //U: Pasa de binario a hexadecimal
	var r= [];
	var separado= bin.split(/(.{1,4})/); //A: Lo separo de a cuatro numeros
	for (var i of separado){
		if (i != ""){ //A: El split me guarda espacios vacios entre los numeros
			var decimal= bin_a_dec(i);
			var hexadecimal= escribir_hex(decimal);
			r.push(hexadecimal);
			//console.log(i, decimal, hexadecimal);
		}
	}
	r= r.join(''); //A: Devuelve un string
	return r;
}

//A: For testing
function test_bin_a_hex(){
	var test= bin_a_hex("01011110101101010010");
	if (test != "5EB52"){
		console.error("ERROR bin_a_hex no anda, bin, expected, recieved 01011110101101010010 5EB52", test);
	}
}

test_bin_a_hex();
//**************************************
//S: Transforma de hexadecimal a binario

function hex_a_dec(hex){ //U: Transforma de hexadecimal a decimal
	for (var i in valores){
		if (valores[i] == hex){
			return i; //E: Si hex == F => i = 15
		}
	}
	console.error("ERROR hex_a_dec, recibido", hex);
	return false;
}

function dec_a_bin(dec){ //U: Transforma de decimal a binario usando el sistema de division repetida por dos
	var r= [0, 0, 0, 0];
	var i= dec;
	var j= 0;
	while (i >= 1){
		var t= i % 2;
		r[j]= Math.floor(t);
		i= i/2
		j++
	}
	r= r.reverse(); //A: Este metodo lo deja en espejo al numero
	r= r.join('')
	return r
}

function hex_a_bin(hex){ //U: Transforma de hexadecimal a binario
	var r= [];
	var separado= hex.split(/(.)/);
	for (var i of separado){
		if (i != ""){
			var decimal= hex_a_dec(i);
			var binario= dec_a_bin(decimal);
			r.push(binario)
			//console.log(i, decimal, binario)
		}
	}
	r= r.join('');
	return r
}

//A: For testing
function test_hex_a_bin(){
	var test= hex_a_bin("5EB52");
	if (test != "01011110101101010010"){
		console.error("ERROR hex_a_bin no anda, hex, expected, recieved 5EB52 01011110101101010010", test);
	}
}

test_hex_a_bin();
