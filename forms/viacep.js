const cep = document.querySelector('#cep')

const logradouro = document.querySelector('#logradouro')
const bairro = document.querySelector('#bairro')
const localidade = document.querySelector('#localidade')
const uf = document.querySelector('#uf')

cep.addEventListener('blur', async () => {
    let cep = cep.value.replace(/\D/g, '');

    if (cep.length !== 8) return;

    try {
        const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);

        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado');
            return;
        }
        
        "cep": cep,
        "logradouro": logradouro,
        "bairro": "",
        "localidade": "São Paulo",
        "uf": "SP",



    } catch (erro) {
        console.erro("Erro ao buscar o CEP:", error)
    }

})



