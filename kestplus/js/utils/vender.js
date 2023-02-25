let valor_saldo = "";
let numero_estoque ="";
let uid="";

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
         uid = user.uid;
     
	  
	 
        
    } else  {
        window.location.replace("https://kestplus.ga");
    }
});



document.getElementById("btn_enviar").addEventListener('click', function(){
	
	const login = document.querySelector(".login").value
	const senha = document.querySelector(".senha").value
	
	if(login =="" || senha==""){
		
		alert('CAMPO VAZIO')
		
		
	}else{
		
		enviar_conta(login,senha)
		
		 document.querySelector(".login").value="";
	     document.querySelector(".senha").value="";
		
		
	}
	
	
		
})



const enviar_conta = (login,senha) =>{
	
	const atualizar={
	login:login,
	senha:senha,
	situacao:'pendente'
	
                }

let aleatorio =  Math.floor(Math.random()*100);

	firebase.database().ref('contas_pendentes/'+uid+'/'+aleatorio).set(atualizar);
	
	
	
	
	
	
	
	
	
}



