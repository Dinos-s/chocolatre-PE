let menos = document.getElementById('menos')
let mais = document.getElementById('mais')
let adicionar = document.querySelector('.add-button')
const sabor = document.getElementById('sabor')
const qtd = document.getElementById('quantidade')

let listaTrufas = [
    {
        sabor: "Oreo",
        quantidade: 3,
        data: '01/01/2024',
    },
    {
        sabor: "Morango", 
        quantidade: 5,
        data: '15/03/2024',
    }
]

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

adicionar.addEventListener('click', function(){
    if(sabor.value.trim() === '' || Number(qtd.value) === 0){
        alert("Por favor, insira o sabor e a quantidade da trufa.")
        return
    }

    const novaTrufa = {
        sabor: sabor.value.trim(),
        quantidade: Number(qtd.value),
        data: new Date().toLocaleDateString('pt-BR')
    }

    listaTrufas.push(novaTrufa)

    atualizarLista()

    sabor.value = ''
    qtd.value = 0
})

function atualizarLista(){
    const listaContainer = document.querySelector('.truffle-list')

    const items = listaContainer.querySelectorAll('.truffle-item')
    items.forEach(item => item.remove())

    listaTrufas.forEach(trufa => {
        const trufaItem = document.createElement('div')
        trufaItem.classList.add('truffle-item')
        trufaItem.innerHTML += `
            <div class="truffle-info">
                <div class="truffle-name">${trufa.sabor}</div>
                <div class="truffle-details">Adicionado em: ${trufa.data}</div>
            </div>
            <div class="truffle-quantity">${trufa.quantidade}</div>
        `
        listaContainer.appendChild(trufaItem)
    })
}

document.addEventListener('DOMContentLoaded', atualizarLista)
