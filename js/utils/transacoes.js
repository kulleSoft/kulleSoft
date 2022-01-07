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
	
	firebase.database().ref('saques_pendentes/'+uid).once('value', (sanpshot) => {
		
		sanpshot.forEach((item,posicao,array)=>{
				   
				   let tableRef = document.getElementById('tabela');
                      
  
                   let newRow = tableRef.insertRow(1);
                   let celula1 = newRow.insertCell(0);
                   let celula2 = newRow.insertCell(1);
				   let celula3 = newRow.insertCell(2);
				   
				   let data = document.createTextNode(item.val().data)
				   let saques_valor = document.createTextNode(item.val().saques_valor+" "+"RS")
				   let situacao = document.createTextNode(item.val().situacao)
				   
				   celula1.appendChild(data)
				   celula2.appendChild(saques_valor)
				   celula3.appendChild(situacao)
				   


				   

				 })

        })
	
	}