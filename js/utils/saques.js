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


document.getElementById("btn_saque").addEventListener('click', function(){
	
	let saque_valor = document.querySelector('.valor_saque').value
	let seletor = document.querySelector('.form-select');
	let tipo_chave = seletor.options[seletor.selectedIndex].text
	let chave_pix = document.querySelector('.chavepix').value
	
	
	if (valor_saldo>=saque_valor){
		
		
		const compra =  valor_saldo - saque_valor
		
		descontar_saldo(compra)
		adicionar_saque(tipo_chave,chave_pix,saque_valor)
		
		alert("SAQUE REALIZADO COM SUCESSO")
		
		
		
	}else{
		
		alert("sem saldo")
		
		
	}
	
	
	
})



const descontar_saldo = (descontar) => {
	
	const atualizar={
	valor: descontar
	
}

	firebase.database().ref('usuario/' + uid).update(atualizar);
	
	
}



const adicionar_saque = (tipo_chave,chave_pix,saques_valor) =>{
	const dates = new Date()
	const data =  dates.toLocaleString();
	const atualizar={
	tipo_chave:tipo_chave,
	chave_pix:chave_pix,
	saques_valor: saques_valor,
	situacao:"pendente",
	data: data
                }

let aleatorio =  Math.floor(Math.random()*100);

	firebase.database().ref('saques_pendentes/'+uid+'/'+aleatorio).set(atualizar);
	
	
	
	
	
	
	
	
	
}









