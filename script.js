let kaina = prompt("Įveskite prekės kainą");
while (kaina === "" || isNaN(kaina)) {
  kaina = prompt("Prašau prekės kainą");
}
alert("Prekės kaina: " + kaina + "€");

let pristatymas = prompt("Ar reikalingas pristatymas į namus? (taip/ne)");
while (pristatymas !== "taip" && pristatymas !== "ne") {
  pristatymas = prompt("Prašau įveskite taip arba ne (Mažosiomis raidėmis)");
}
if (pristatymas === "taip") {
  miestas = prompt("Į kurį miestą reiks pristatyti?");
  console.log("Prekės kaina: " + kaina + "€");
  let pristatymas = parseFloat(kaina) / 7;
  console.log("Pristatymas: " + pristatymas.toFixed(2) + "€");
  let isViso = parseFloat(kaina) + pristatymas;
  console.log("Iš viso: " + isViso.toFixed(2) + "€");
  console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.");
} else if (pristatymas === "ne") {
  console.log("Prekės kaina: " + kaina + "€");
  console.log(
    "Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a "
  );
}
