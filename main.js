document.getElementById('numTelefone').addEventListener('input', function (e) {
    let value = e.target.value
        .replace(/\D/g, '') 
        .replace(/^(\d{2})(\d)/g, '($1) $2') 
        .replace(/(\d{5})(\d)/, '$1-$2'); 

    e.target.value = value; 
});

const form = document.getElementById('button-input');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('contactName').value;
    const telefone = document.getElementById('numTelefone').value;
    const contactList = document.getElementById('contact');

    const messageError = document.getElementById('message');
        
    if (telefone.length !== 15) {
        messageError.textContent = 'O telefone deve conter exatamente 11 dígitos.';
    } else {
        messageError.textContent = ''; 
        
        const tr = document.createElement('tr'); 
        const tdNome = document.createElement('td'); 
        const tdTelefone = document.createElement('td'); 

        tdNome.textContent = nome;
        tdTelefone.textContent = telefone;

        tr.appendChild(tdNome);
        tr.appendChild(tdTelefone);
        contactList.appendChild(tr); 

        document.getElementById('contactName').value = '';
        document.getElementById('numTelefone').value = '';
    }
}); 
