const street = document.getElementById("street");
const neighborhood = document.getElementById("neighborhood");
const city = document.getElementById("city");
const state = document.getElementById("state");
const number = document.getElementById("number");
const cepError = document.getElementById("cepError");

async function getZipCode() {
  const zipCode = document.getElementById("zipCode");
  const url = `https://viacep.com.br/ws/${zipCode.value}/json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    street.value = data.logradouro;
    neighborhood.value = data.bairro;
    city.value = data.localidade;
    state.value = data.uf;
    number.focus();
    cepError.classList.add("hidden");
    zipCode.classList.remove("input-cep-error");
  } catch (error) {
    cepError.classList.remove("hidden");
    zipCode.classList.add("input-cep-error");
  }
}
