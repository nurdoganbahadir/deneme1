/* Example-1
Aşağıdaki kriterlere göre 400 km mesafedeki bir gönderi için nakliye ücreti ne kadar olur?
0-500 km: 50 TL
501-999 km: 100 TL
1000+ km: 500 TL */

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
