document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de contato
    const contactForm = document.getElementById('contact-form');

    // Adiciona um ouvinte de evento para o envio do formulário
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Seleciona os campos do formulário
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Variável para rastrear a validade
        let isValid = true;

        // Valida o campo de nome
        if (nameInput.value.trim() === '') {
            alert('Por favor, preencha o seu nome.');
            isValid = false;
            return;
        }

        // Valida o campo de e-mail (formato básico)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Por favor, insira um endereço de e-mail válido.');
            isValid = false;
            return;
        }

        // Valida o campo de mensagem
        if (messageInput.value.trim().length < 10) {
            alert('Sua mensagem deve ter pelo menos 10 caracteres.');
            isValid = false;
            return;
        }

        if (isValid) {
            alert('Obrigado pelo seu contato! Mensagem enviada com sucesso.');
            contactForm.reset(); // Limpa o formulário após o envio bem-sucedido
        }
    });
});