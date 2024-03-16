let saldo = 100;
let winningCarId = null;
let posX1 = 0,
  posX2 = 0,
  posX3 = 0,
  posX4 = 0,
  posX5 = 0;
let winner = null;
let myInterval;
const btn = document.getElementById("btn-start");
btn.addEventListener("click", startRace);

function moveCar() {
  if (posX1 > 610 || posX2 > 610 || posX3 > 610 || posX4 > 610 || posX5 > 610) {
    if (posX1 > 610 && !winner) {
      winner = "pilot 1";
      winningCarId = "1";
    } else if (posX2 > 610 && !winner) {
      winner = "pilot 2";
      winningCarId = "2";
    } else if (posX3 > 610 && !winner) {
      winner = "pilot 3";
      winningCarId = "3";
    } else if (posX4 > 610 && !winner) {
      winner = "pilot 4";
      winningCarId = "4";
    } else if (posX5 > 610 && !winner) {
      winner = "pilot 5";
      winningCarId = "5";
    }

    myStop(winner);
  } else {
    posX1 += Math.floor(Math.random() * 5);
    const div1 = document.getElementById("car1");
    div1.style.transform = "translate(" + posX1 + "px)";

    posX2 += Math.floor(Math.random() * 5);
    const div2 = document.getElementById("car2");
    div2.style.transform = "translate(" + posX2 + "px)";

    posX3 += Math.floor(Math.random() * 5);
    const div3 = document.getElementById("car3");
    div3.style.transform = "translate(" + posX3 + "px)";

    posX4 += Math.floor(Math.random() * 5);
    const div4 = document.getElementById("car4");
    div4.style.transform = "translate(" + posX4 + "px)";

    posX5 += Math.floor(Math.random() * 5);
    const div5 = document.getElementById("car5");
    div5.style.transform = "translate(" + posX5 + "px)";
  }
}

function startRace() {
  document.getElementById("message").textContent = "";
  winner = null;
  const bet = document.getElementById("bet").value;
  if (bet < 5) {
    alert("A aposta mínima é de R$5.");
    return;
  }

  if (saldo < bet) {
    alert("Saldo insuficiente para fazer esta aposta.");
    return;
  }

  (posX1 = 0), (posX2 = 0), (posX3 = 0), (posX4 = 0), (posX5 = 0);

  myInterval = setInterval(moveCar, 50);
}

function myStop(winner) {
  clearInterval(myInterval);

  const chosenRacer = document.getElementById("option").value;
  const bet = document.getElementById("bet").value;
  let message;

  if (chosenRacer === winningCarId) {
    saldo += 2 * parseInt(bet);
    const profit = 2 * parseInt(bet);
    message = "Congratulations, you won the race! You earned R$ " + profit;
  } else {
    saldo -= parseInt(bet);
    message = "Sorry, you lost. The winner is " + winner;
  }
  document.getElementById("value").textContent = saldo;
  document.getElementById("message").textContent = message;
}
