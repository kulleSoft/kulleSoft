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
	let texto_saque = document.querySelector('.texto_saque');
	texto_saque.innerText="";
	texto_saque.classList.remove('text-danger')
	texto_saque.classList.remove('text-success')
	texto_saque.classList.remove('text-warning')
	
	if(saque_valor==""|| chave_pix==""){
		
		
		texto_saque.classList.toggle('text-warning')
		texto_saque.innerText="Preencha todos os campos.";
		
		
	}else{
		if(saque_valor>=20){
		if (valor_saldo>=20){
		
		
		const compra =  valor_saldo - saque_valor
		
		descontar_saldo(compra)
		adicionar_saque(tipo_chave,chave_pix,saque_valor)
		
		
		texto_saque.classList.toggle('text-success')
		texto_saque.innerText="Saque no valor de "+saque_valor+" reais realizado com sucesso.";
		

		
	}else{
		
		texto_saque.classList.toggle('text-danger')
		texto_saque.innerText="O valor minimo para saque é de R$ 20,00. O valor que você tem disponivel é de R$ "+valor_saldo+"";
		
		
	}
	
		}else{
			
			
			
		texto_saque.classList.toggle('text-danger')
		texto_saque.innerText="O valor minimo para saque é de R$ 20,00.";
			
			
		}
		
		
		
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









