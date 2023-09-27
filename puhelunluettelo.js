const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const puhelinluettelo = [];

function lisaaHenkilo() {
  rl.question("Syötä henkilön nimi: ", (nimi) => {
    rl.question("Syötä henkilön puhelinnumero: ", (puhelinnumero) => {
      const henkilo = {
        nimi: nimi,
        puhelinnumero: puhelinnumero,
      };
      puhelinluettelo.push(henkilo);
      console.log(`${nimi} lisätty puhelinluetteloon.`);
      tulostaValikko();
    });
  });
}

function haePuhelinnumero() {
  rl.question("Syötä haettavan henkilön nimi: ", (nimi) => {
    const henkilo = puhelinluettelo.find((henk) => henk.nimi === nimi);
    if (henkilo) {
      console.log(
        `Henkilön ${henkilo.nimi} puhelinnumero: ${henkilo.puhelinnumero}`
      );
    } else {
      console.log("Henkilöä ei löytynyt puhelinluettelosta.");
    }
    tulostaValikko();
  });
}

function tulostaValikko() {
  console.log("\nValitse toiminto:");
  console.log("1. Lisää henkilö");
  console.log("2. Hae puhelinnumero");
  console.log("3. Lopeta");
  rl.question("Valitse toiminto (1/2/3): ", (valinta) => {
    if (valinta === "1") {
      lisaaHenkilo();
    } else if (valinta === "2") {
      haePuhelinnumero();
    } else if (valinta === "3") {
      rl.close();
    } else {
      console.log("Virheellinen valinta. Valitse uudelleen.");
      tulostaValikko();
    }
  });
}

console.log("Tervetuloa puhelinluetteloon!");
tulostaValikko();
