const mesafe = 400;

const durum =
  mesafe >= 0 && mesafe <= 500
    ? "Nakliye ücreti 50TL"
    : mesafe >= 501 && mesafe <= 999
    ? "Nakliye ücreti 100TL"
    : mesafe >= 1000
    ? "Nakliye ücreti 500TL"
    : "Yanlış değer girdiniz";
console.log(durum);
