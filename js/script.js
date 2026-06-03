const btn = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", async () => {

    const cep = document.getElementById("cep").value;

    try {

        const response = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        const dados = await response.json();

        if (dados.erro) {
            resultado.innerHTML = "CEP não encontrado.";
            return;
        }

        resultado.innerHTML = `
            <p><strong>Rua:</strong> ${dados.logradouro}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
        `;

    } catch (erro) {
        resultado.innerHTML =
            "Erro ao consultar a API.";
    }

});