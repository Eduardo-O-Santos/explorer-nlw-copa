function createGame(playerOne, hour, playerTwo) {
  return `
    <li>
      <img src="./assets/image/icon-${playerOne}.svg" alt="Bandeira do ${playerOne}">
      <strong>${hour}</strong>
      <img src="./assets/image/icon-${playerTwo}.svg" alt="Bandeira da Sérvia">
    </li>
  `
}

let delay = -0.4;

function createCard(date, day, games) {
  delay += 0.4; 
  return `
   <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = `
    ${createCard(
      "24/11", 
      "quinta", 
      createGame("brazil", "16:00", "serbia"))}
    ${createCard(
      "28/11",
      "segunda", 
     createGame("brazil", "13:00", "switzerland"))}
    ${createCard(
      "02/12",
      "sexta",
      createGame("brazil", "16:00", "cameroon")
    )}      
`
// Funções a serem desenvolvidas
const btnGreen = document.querySelector('#btn-green');
btnGreen.addEventListener('click', () => {
  document.body.classList.add('green');
});
