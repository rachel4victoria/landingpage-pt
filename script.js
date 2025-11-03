// criar uma const para o documento
const form = document.getElementById('contact-form');

// criar uma function para o evento 
form.addEventListener('submit', function(event) {
        event.preventDefault(); //não recarrega ao enviar
     // coleta de dados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    console.log("Dados Coletados':");
    console.log({ nome, email, telefone, mensagem });


    
    
    // mensagem de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi recebida com sucesso. Responderemos em breve.`);

    // limpeza de formulario
    form.reset();

});