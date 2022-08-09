let saldo = ""

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        let uid = user.uid;
        firebase.database().ref('DIZU_SERVER/Contas/' + uid).once('value', (sanpshot) => {
            saldo = parseFloat(sanpshot.val().valor);
            document.querySelector('.valor').innerText = "R$ " + (saldo).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
			document.querySelector('.nome_user').innerText = sanpshot.val().nome;
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
        window.location.replace("https://kullesoft.com/painel/login");
    }
});
