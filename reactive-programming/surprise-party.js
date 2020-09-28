const readline = require("readline");

function getResponse(askedQuestion) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(askedQuestion, (response) => {
      resolve(response);
      rl.close();
    });
  });
}

function girlfriend() {
  console.log("G: Apagar as luzes");
  console.log("G: Pedir silencio");
  console.log("G: Surpresa!!!");
}

function apartmentManager(event) {
  console.log("AM: Monitorando barulho");
  console.log(`AM: ${event.date}`);
  console.log(`AM: ${event.response}`);
}

async function doorsman(interested) {
  while (true) {
    const response = await getResponse("O namorado chegou? (s/N/q) \n");

    if (response.toLowerCase() === "s") {
      (interested || []).forEach((obs) => obs({ response, date: Date.now() }));
    } else if (response.toLowerCase() === "q") {
      break;
    }
  }
}

// Dois observadores [girlfriend, apartmentManager]
// Subject é o doorsman
doorsman([apartmentManager, girlfriend]);
