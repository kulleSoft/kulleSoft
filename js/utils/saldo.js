 let saldo ="";
 firebase.auth().onAuthStateChanged((user) => {
     if (user) {
         var uid = user.uid;
         firebase.database().ref('usuario/' + uid).once('value', (sanpshot) => {
			 saldo=sanpshot.val().valor;
             console.log(sanpshot.val().valor)
                 // document.querySelector('.admin_name').innerText= sanpshot.val().username
             document.querySelector('.valor').innerText = "R$" + " " + sanpshot.val().valor
         })
         window.setInterval(atualizar_saldo, 3000);

         function atualizar_saldo() {
             firebase.database().ref('usuario/' + uid).once('value', (sanpshot) => {
                 console.log(sanpshot.val().valor)
                     // document.querySelector('.admin_name').innerText= sanpshot.val().username
                document.querySelector('.valor').innerText = "R$" + " " + sanpshot.val().valor
				
				
             })
		
         }
     } else {
        window.location.replace("https://kestplus.ga/");
     }
});