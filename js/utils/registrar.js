
    
   // var database = firebase.database();
    

    //CRIAR COM EMAIL E SENHA
    function criar(){
    
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const username = document.getElementById("name").value
	const whatsapp = document.getElementById("whatsapp").value
 
    var today = new Date();
	var ms = today.getMilliseconds();
    


    

   firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid)
	 
 firebase.database().ref('GNI_SERVER/Contas/' + user.uid).set({
    nome: username,
    email: email,
    valor:"0",
	uid: user.uid,
	dias:"10000000000000000000000000000000000",
	tempo: ms,
	whatsapp: whatsapp
    
    });
	 firebase.database().ref('DIZU_SERVER/Contas/' + user.uid).set({
    nome: username,
    email: email,
    valor:"0",
	uid: user.uid,
	dias:"0",
	tempo: ms,
	whatsapp: whatsapp
    
    }); 


window.location.replace("https://kullesot.com/painel/login");
/* firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    console.log("aguardando confirmação")
  }); */

   
     
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

    
	
	}

    /*
    firebase.database().ref(database, 'usuario/' + user.uid),{
          username: username,
          email: email
      });
*/






