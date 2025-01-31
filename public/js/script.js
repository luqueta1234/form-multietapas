// script.js

// Salvar dados no sessionStorage
function saveData() {
    if (document.getElementById('nome')) {
        sessionStorage.setItem('nome', document.getElementById('nome').value);
    }

    if (document.getElementById('email')) {
        sessionStorage.setItem('email', document.getElementById('email').value);
    }

    if (document.getElementById('endereco')) {
        sessionStorage.setItem('endereco', document.getElementById('endereco').value);
    }

    if (document.getElementById('cidade')) {
        sessionStorage.setItem('cidade', document.getElementById('cidade').value);
    }
}

// Avançar para a próxima etapa
function nextStep() {
    saveData();
    let nextPage = '';

    if (window.location.pathname.includes('etapa1')) {
        nextPage = '/etapa2';
    } else if (window.location.pathname.includes('etapa2')) {
        nextPage = '/etapa3';
    }

    if (nextPage) {
        window.location.href = nextPage;
    }
}

// Voltar para a etapa anterior
function previousStep() {
    
    saveData();
    let prevPage = '';

    if (window.location.pathname.includes('etapa3')) {
        prevPage = '/etapa2'; // Verifique se /etapa2 renderiza corretamente
    } else if (window.location.pathname.includes('etapa2')) {
        prevPage = '/etapa1'; // Verifique se /etapa1 renderiza corretamente
    }

    if (prevPage) {
        window.location.href = prevPage;
    }
}

// Exibir dados resumidos na etapa 3
function showResumo() {
    const nome = sessionStorage.getItem('nome') || "Não informado";
    const email = sessionStorage.getItem('email') || "Não informado";
    const endereco = sessionStorage.getItem('endereco') || "Não informado";
    const cidade = sessionStorage.getItem('cidade') || "Não informado";

    const resumo = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
    const resumoDiv = document.getElementById('resumo');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo;
    }
}
//Essa função já é chamada no final do script.js, na verificação:
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Enviar o formulário (por exemplo, para um backend)
function submitForm() {
    // Coleta os dados do sessionStorage
    const nome = sessionStorage.getItem('nome');
    const email = sessionStorage.getItem('email');
    const endereco = sessionStorage.getItem('endereco');
    const cidade = sessionStorage.getItem('cidade');

    // Verifica se os dados necessários estão presentes
    if (!nome || !email || !endereco || !cidade) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    // Envia os dados para o backend via fetch
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome,
            email,
            endereco,
            cidade
        })
    })
    .then(response => response.text())
    .then(data => {
        alert('Formulário enviado com sucesso!');
        console.log(data);  // Aqui você pode logar ou tratar a resposta do servidor
    })
    .catch(error => {
        alert('Erro ao enviar os dados!');
        console.error('Erro:', error);
    });
}

// Mostrar resumo apenas na etapa 3
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Preencher os campos com os dados salvos no sessionStorage quando voltar para uma etapa
function populateForm() {
    if (document.getElementById('nome')) {
        document.getElementById('nome').value = sessionStorage.getItem('nome') || '';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').value = sessionStorage.getItem('email') || '';
    }
    if (document.getElementById('endereco')) {
        document.getElementById('endereco').value = sessionStorage.getItem('endereco') || '';
    }
    if (document.getElementById('cidade')) {
        document.getElementById('cidade').value = sessionStorage.getItem('cidade') || '';
    }
}

// Preencher os campos ao carregar a página
window.onload = populateForm;
