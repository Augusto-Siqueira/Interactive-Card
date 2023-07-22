// Selecionar os elementos do formulário
const cardDataInput = document.querySelector('input[name="number"]');
const cardNameInput = document.querySelector('input[name="name"]');
const cardMonthInput = document.querySelector('input[name="month"]');
const cardYearInput = document.querySelector('input[name="year"]');
const cardCvcInput = document.querySelector('input[name="cvc"]');

const infoSection = document.querySelector(".info");
const resultSection = document.querySelector(".result");
const registerSection = document.querySelector(".register");
const constainer1Section = document.querySelector(".container-1");
const containerSection = document.querySelector(".container-2");

//Selecionando os botões

const confirmButton = document.querySelector(".confirm");

// Selecionar os elementos onde serão exibidos os valores do formulário
const cardDataDisplay = document.querySelector(".card-1 .datacard span");
const cardNameDisplay = document.querySelector(".namecard span");
const cardMonthDisplay = document.querySelector(".expiration .month");
const cardYearDisplay = document.querySelector(".expiration .year");
const cardCvcDisplay = document.querySelector(".card-2 span");

// Adicionando event listeners nos campos de entradas
cardDataInput.addEventListener("input", updateCardData);
cardNameInput.addEventListener("input", updateCardName);
cardMonthInput.addEventListener("input", updateExpirationDate);
cardYearInput.addEventListener("input", updateExpirationDate);
cardCvcInput.addEventListener("input", updateCardCvc);

// Função para atualizar o número do cartão
function updateCardData() {
  const inputText = cardDataInput.value;
  const formattedText = formatCardNumber(inputText);
  cardDataDisplay.textContent = formattedText
    ? formattedText
    : "0000 0000 0000 0000";
}

// Função para atualizar o nome no cartão
function updateCardName() {
  const inputText = cardNameInput.value;
  cardNameDisplay.textContent = inputText ? inputText.toUpperCase() : "";
}

// Função para atualizar a data de expiração do cartão
function updateExpirationDate() {
  const monthValue = cardMonthInput.value.substring(0, 2);
  const yearValue = cardYearInput.value.substring(0, 2);
  cardMonthDisplay.textContent = monthValue ? monthValue : "00";
  cardYearDisplay.textContent = yearValue ? yearValue : "00";
}

// Função para atualizar o CVC do cartão
function updateCardCvc() {
  const inputText = cardCvcInput.value;
  const formattedText = inputText.substring(0, 3);
  cardCvcDisplay.textContent = formattedText ? formattedText : "***";
}

function formatCardNumber(input) {
  const maxLength = 16; // Comprimento máximo do número do cartão, incluindo espaços
  const formatted = input.replace(/\s/g, "").substring(0, maxLength);
  const groups = formatted.match(/.{1,4}/g); // Divide a string em grupos de 4 caracteres

  return groups ? groups.join(" ") : "";
}

// Adicionando evento de clique ao botão de confirmação
confirmButton.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Verifica se o campo de nome do cartão está vazio
  if (cardNameInput.value === "") {
    alert("Por favor, digite o nome no cartão.");
    return; // Interrompe a execução caso não atenda à condição
  }

  // Verifica se o número do cartão tem pelo menos 16 caracteres
  if (cardDataInput.value.length < 16) {
    alert("O número do cartão deve ter pelo menos 16 caracteres.");
    return;
  }

  // Verifica se o campo do mês tem pelo menos 2 caracteres
  if (cardMonthInput.value.length < 2) {
    alert("O mês de expiração do cartão deve ter pelo menos 2 caracteres.");
    return;
  }

  // Verifica se o campo do ano tem pelo menos 2 caracteres
  if (cardYearInput.value.length < 2) {
    alert("O ano de expiração do cartão deve ter pelo menos 2 caracteres.");
    return;
  }

  // Verifica se o campo do CVC tem pelo menos 3 caracteres
  if (cardCvcInput.value.length < 3) {
    alert("O CVC do cartão deve ter pelo menos 3 caracteres.");
    return;
  }

  // Todas as condições foram atendidas, oculta a seção de informações e exibe a seção de resultado
  constainer1Section.style.display = "none";
  containerSection.style.display = "block";
});

// Selecionar o botão "Continue"
const continueButton = document.querySelector(".continue");

// Adicionando evento de clique ao botão "continue"
continueButton.addEventListener("click", function (event) {
    // Limpa o valor dos inputs
    cardDataInput.value = "";
    cardNameInput.value = "";
    cardMonthInput.value = "";
    cardYearInput.value = "";
    cardCvcInput.value = "";

    // Atualiza os elementos de exibição chamando as funções correspondentes
    updateCardData();
    updateCardName();
    updateExpirationDate();
    updateCardCvc();

    // Inverte a visibilidade das seções infoSection e resultSection
    constainer1Section.style.display = "block";
    containerSection.style.display = "none";
});
