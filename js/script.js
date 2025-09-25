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
        const trufas = await getAllTrufas();
        atualizarLista(trufas);        
    } catch (error) {
        console.error('Error loading trufas:', error);
    }
}


// Chama a função para adicionar uma nova trufa
adicionar.addEventListener('click', adicionarTrufa)

async function adicionarTrufa() {
    const saborValue = sabor.value.trim();
    const quantidadeValue = Number(qtd.value);

    if (saborValue === '' || quantidadeValue === 0) {
        alert("Por favor, insira o sabor e a quantidade da trufa.");
        return;
    }

    try {
        await addTrufa({
            sabor: saborValue, 
            quantidade: quantidadeValue
        });

        // zerando o formulário
        sabor.value = '';
        qtd.value = 0;

        await carregarTrufas();
    } catch (error) {
        console.error('Error adding trufa:', error);
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

// Executa a função ao carregar o DOM
document.addEventListener('DOMContentLoaded', atualizarLista)
