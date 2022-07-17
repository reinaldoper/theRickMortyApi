/* const fetch = require('node-fetch'); */
const nome = document.querySelector('#nome');
const img = document.querySelector('#image');
const tipo = document.querySelector('#type');
const input = document.querySelector('#input');

const fetchJoke =  async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
  
}
const result = async ({ target }) => {
  const result = target.value;
  if (isNaN(result)) {
      alert('Digite m número válido!')
  } else {
    const url = await fetchJoke(result);
    console.log(url);
    const { name, type, image } = url;
    nome.innerHTML = name;
    img.src = image;
    tipo.innerHTML = type;
  }
  input.value = '';
}

const requestId = () => {
  input.addEventListener('change', result)

}
window.onload = requestId();
/* console.log(fetchJoke(3)); */