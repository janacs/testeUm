// script.js
const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable').querySelector('tbody');
const container = document.getElementById('container');
const listContainer = document.getElementById('listContainer');
const newProductButton = document.getElementById('newProductButton');

let products = [];

// Função para alternar entre cadastro e listagem
function toggleView(showForm) {
  container.style.display = showForm ? 'block' : 'none';
  listContainer.style.display = showForm ? 'none' : 'block';
}

// Função para adicionar produto à tabela
function addProductToTable(product) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${product.name}</td>
    <td>R$ ${product.price.toFixed(2)}</td>
  `;
  productTable.appendChild(row);
}

// Função para listar produtos ordenados
function listProducts() {
  productTable.innerHTML = ''; // Limpar tabela
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  sortedProducts.forEach(addProductToTable);
}

// Evento de envio do formulário
productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const product = {
    name: document.getElementById('productName').value,
    description: document.getElementById('productDescription').value,
    price: parseFloat(document.getElementById('productPrice').value),
    available: document.getElementById('productAvailable').value,
  };

  products.push(product); // Adicionar produto à lista
  productForm.reset(); // Limpar formulário
  toggleView(false); // Mostrar listagem
  listProducts(); // Atualizar listagem
});

// Evento do botão "Cadastrar Novo Produto"
newProductButton.addEventListener('click', () => {
  toggleView(true); // Mostrar formulário
});
