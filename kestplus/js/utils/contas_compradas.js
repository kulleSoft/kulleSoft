const user = firebase.auth().currentUser;
let uid="";

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      uid =  user.uid;
	  
	  tabela_contas();
       
    } else {
       
	    window.location.replace("https://kestplus.ga");
    }
});




const tabela_contas =() =>{
	
	firebase.database().ref('usuario/' + uid+'/contas_compradas').once('value', (sanpshot) => {
		
		sanpshot.forEach((item,posicao,array)=>{
				   
				   let tableRef = document.getElementById('tabela');

  
                   let newRow = tableRef.insertRow(1);
                   let celula1 = newRow.insertCell(0);
                   let celula2 = newRow.insertCell(1);
				   /* let celula_button = newRow.insertCell(2); */
                   let texto1 = document.createElement('button')
				  
                   texto1.innerHTML = item.val().nome;
                   texto1.className+="btn btn-info"
                   texto1.addEventListener("click", function () {
                   var tempInput = document.createElement("input");
                   tempInput.style = "position: absolute; left: -1000px; top: -1000px";
                   tempInput.value = item.val().nome
                   document.body.appendChild(tempInput);
                   tempInput.select();
                   document.execCommand("copy");
                   document.body.removeChild(tempInput);
             });
                   celula1.appendChild(texto1);

                   let texto2 = document.createElement('button')
				  
                   texto2.innerHTML = item.val().senha;
                   texto2.className+="btn btn-info"
                   texto2.addEventListener("click", function () {
                   var tempInput = document.createElement("input");
                   tempInput.style = "position: absolute; left: -1000px; top: -1000px";
                   tempInput.value =item.val().senha
                   document.body.appendChild(tempInput);
                   tempInput.select();
                   document.execCommand("copy");
                   document.body.removeChild(tempInput);
             });
                   celula2.appendChild(texto2)

/* let criar_button = document.createElement('button')
				  
criar_button.innerHTML = "Detalhe";
criar_button.className+="btn btn-danger detalhe"
criar_button.addEventListener("click", function () {

});
celula_button.appendChild(criar_button)
                   
                    */
				   

				 })

        })
	
	}