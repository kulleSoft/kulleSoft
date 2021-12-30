 let saldo = ""

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        let uid = user.uid;
        firebase.database().ref('usuario/' + uid).once('value', (sanpshot) => {
            saldo = parseFloat(sanpshot.val().valor);
            document.querySelector('.valor').innerText = "R$ " + (saldo).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        })
        window.setInterval(atualizar_saldo, 3000);
        const atualizar_saldo = () => {
            saldo = parseFloat(sanpshot.val().valor);
            document.querySelector('.valor').innerText = "R$ " + (saldo).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        }
    } else {
        window.location.replace("https://localhost:8081");
    }
});
let numero_estoque ="4";

window.setInterval(numero_contas, 3000);


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

//verificar quantas contas disponiveis
function numero_contas(){
	
	firebase.database().ref('contas').once('value', (sanpshot) => {
                 
				  numero_estoque= sanpshot.val().contas_completas.length
				 document.querySelector(".estoque").innerText="CONTAS DISPONIVEIS:"+" "+sanpshot.val().contas_completas.length
                    
             })
	
	
	
	
	
	
	
}

function comprar_conta(){
	
	let numero = document.getElementById("input_numero").value
	
	let valor = 25* numero ;
	console.log(valor)
	
	let saldo = 50;
	console.log("saldo"+" "+saldo)
	
	if(saldo>=valor){
		
		alert("conta comprada");
		
	}else{
		
		alert("saldo insuficiente");
		
		
	}
	
	
	
	
	
	
	
	
}



function descontar_saldo(){
	
	
	
	
	
	
	
}



function saldo(saldos){
  

}
