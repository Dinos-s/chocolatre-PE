// Chamando a conexõ com a API do banco
import { getAllTrufas, addTrufa } from './api.js';

let menos = document.getElementById('menos')
let mais = document.getElementById('mais')
let adicionar = document.querySelector('.add-button')
const sabor = document.getElementById('sabor')
const qtd = document.getElementById('quantidade')

// Chama as trufas ao carregar a página
await carregarTrufas();

menos.addEventListener('click', ()=>{
    let quanto = Number(qtd.value)
    if (quanto > 0) {
        qtd.value = quanto - 1
    }    
})

mais.addEventListener('click', ()=>{
    let quanto = Number(qtd.value)
    qtd.value = quanto + 1;
})

// adicionar.addEventListener('click', function(){
//     if(sabor.value.trim() === '' || Number(qtd.value) === 0){
//         alert("Por favor, insira o sabor e a quantidade da trufa.")
//         return
//     }

//     const novaTrufa = {
//         sabor: sabor.value.trim(),
//         quantidade: Number(qtd.value),
//         data: new Date().toLocaleDateString('pt-BR')
//     }

//     listaTrufas.push(novaTrufa)

//     atualizarLista()

//     sabor.value = ''
//     qtd.value = 0
// })

// Carrega as trufas na lista
async function carregarTrufas() {
    try {
        showLoading(true)

        const trufas = await getAllTrufas();
        atualizarLista(trufas);        
    } catch (error) {
        console.error('Error loading trufas:', error);
        showMessage("Erro ao carregar as trufas. Tente novamente mais tarde." + error.message, "error");
    } finally {
        showLoading(false)
    }
}


// Chama a função para adicionar uma nova trufa
adicionar.addEventListener('click', adicionarTrufa)

async function adicionarTrufa() {
    const saborValue = sabor.value.trim();
    const quantidadeValue = Number(qtd.value);

    if (saborValue === '' || quantidadeValue === 0) {
        showMessage("Por favor, insira o sabor e a quantidade da trufa.", "error");
        return;
    }

    try {
        showLoading(true);

        await addTrufa({
            sabor: saborValue, 
            quantidade: quantidadeValue
        });

        showMessage("Trufa adicionada com sucesso!", "sucess");

        // zerando o formulário
        sabor.value = '';
        qtd.value = 0;

        await carregarTrufas();
    } catch (error) {
        console.error('Error adding trufa:', error);
    } finally {
        showLoading(false);
    }
}

// Atualiza a lista de trufas na interface
function atualizarLista(trufas){
    const listaContainer = document.querySelector('.truffle-list')

    const items = listaContainer.querySelectorAll('.truffle-item')
    items.forEach(item => item.remove())

    trufas.forEach(trufa => {
        const trufaItem = document.createElement('div')
        trufaItem.classList.add('truffle-item')
        trufaItem.innerHTML = `
            <div class="truffle-info">
                <div class="truffle-name">${trufa.sabor}</div>
                <div class="truffle-details">Adicionado em: ${formatarData(trufa.data_adicionado)}</div>
            </div>
            <div class="truffle-quantity">${(trufa.quantidade)}</div>
        `
        listaContainer.appendChild(trufaItem)
    })
}

// Formata a data para o padrão brasileiro
function formatarData(dataISO) {
    return new Date(dataISO).toLocaleDateString('pt-BR');
}

// Mostra as menssagens de erro/sucesso
function showMessage(msg, type = "info") {
    const existingMsg = document.querySelector('.msg')
    if (existingMsg) existingMsg.remove()

    const msgElement = document.createElement('div')
    msgElement.className = `msg msg-${type}`
    msgElement.textContent = msg

    document.querySelector('.input-section').after(msgElement)

    // mensagem desaparece após 5 segundos
    setTimeout(() => {
        msgElement.remove()
    }, 5000)
}

// Função de carregamento
function showLoading(show) {
    let loader = document.querySelector('.loader')
    if (show && !loader) {
        loader = document.createElement('div')
        loader.className = 'loader'
        loader.textContent = 'Carregando...'
        document.querySelector('.input-section').after(loader)
    } else if (!show && loader) {
        loader.remove()
    }
}

// Executa a função ao carregar o DOM
document.addEventListener('DOMContentLoaded', atualizarLista)
