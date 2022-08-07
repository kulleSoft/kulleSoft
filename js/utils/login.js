const user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.uid)
        window.location.replace("./painel/painel.html");
    } else {
       
    }
});

const logar = () => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            var user = userCredential.user;
            window.location.replace("./painel/painel.html");
            console.log("logado com sucesso!!" + user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });

}
