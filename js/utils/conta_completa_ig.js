let valor_saldo = "";
let numero_estoque ="";
let uid="";
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
         uid = user.uid;
        let atualizar_saldo  = ()=>{  firebase.database().ref('usuario/' + uid).once('value', (sanpshot) => {
        let saldo = parseFloat(sanpshot.val().valor);
		valor_saldo = sanpshot.val().valor;
		   
            document.querySelector('.saldo').innerText = "R$ " + (saldo).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        })
		
		
		
	  }
	  
	  window.setInterval(atualizar_saldo,1000)
        
    } else  {
        window.location.replace("https://kestplus.ga");
    }
});


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
	
	let valor = 2* numero ;
	
	

	
	if(valor_saldo>=valor){
		
		toastr.success('Compra realizada com sucesso');
		
		let compra = valor_saldo - valor;
		
		descontar_saldo(compra);
		
	}else{
		
	toastr.info('Saldo insuficiente')
		
		
	}
	
	
	
	
	
	
	
	
}



function descontar_saldo(descontar){
	
const atualizar={
	valor: descontar
	
}



	firebase.database().ref('usuario/' + uid).update(atualizar);
	
	
	
	
	
	
	
}







