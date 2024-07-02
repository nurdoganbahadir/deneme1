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

/* Examle-2
Kullanıcının yaşına ve üyelik durumuna göre farklı mesajlar veren bir if-else yapısı yazın.
Kullanıcının yaşı 18'den büyükse ve VIP üyesi ise "Hoşgeldiniz, VIP Üye" yazdırın.
Yaşı 18'den büyükse ve normal üye ise "Hoşgeldiniz" yazdırın.
Yaşı 18 veya daha küçükse "Giriş yapamazsınız" yazdırın. */

const age = 20;
const isVIP = true;

if (age >= 18) {
  if (isVIP === true) {
    console.log("Hoşgeldiniz, VIP Üye");
  } else {
    console.log("Hoşgeldiniz");
  }
} else {
  console.log("Giriş yapamazsınız.");
}

/* Example-3
Hava durumuna göre kıyafet önerisi veren bir if-else yapısı yazın.
Hava durumu "güneşli" ise "T-shirt giyin", "yağmurlu" ise "Şemsiye alın", "karlı" ise "Mont giyin" yazdırın. 
Diğer durumlar için "Hava durumunu kontrol edin" yazdırın.
const weather = "yağmurlu";  Bu değeri farklı hava durumlarıyla değiştirerek test edin. */

const weather = "karlı";

if (weather === "yağmurlu") {
  console.log("Şemsiye alın");
} else if (weather === "güneşli") {
  console.log("T-shirt giyin");
} else if (weather === "karlı") {
  console.log("Mont giyin");
} else {
  console.log("Hava durumunu kontrol edin!");
}

/* Example-4
Kullanıcı adı ve şifreye göre giriş kontrolü yapan bir if-else yapısı yazın.
Kullanıcı adı "admin" ve şifre "1234" ise "Giriş başarılı", değilse "Giriş başarısız" yazdırın.
const username = "admin"; Bu değeri farklı kullanıcı adlarıyla değiştirerek test edin.
const password = "1234"; Bu değeri farklı şifrelerle değiştirerek test edin. */

const username = "admin";
const password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Giriş başarılı");
  } else {
    console.log("Şifreniz yanlış");
  }
} else {
  console.log("Giriş başarısız");
}

/* Example-5
Bir ürün fiyatına ve indirim koduna göre indirimli fiyatı hesaplayan bir if-else yapısı yazın.
Eğer indirim kodu "DISCOUNT10" ise %10 indirim, "DISCOUNT20" ise %20 indirim, "DISCOUNT30" ise %30 indirim uygulayın. 
Geçersiz indirim kodu ise "Geçersiz indirim kodu" yazdırın. */

/* const price = 100;

saleCode = prompt("İndirim kodunuz");

if (saleCode === "DISCOUNT10") {
  console.log(price * 0.9);
} else if (saleCode === "DISCOUNT20") {
  console.log(price * 0.8);
} else if (saleCode === "DISCOUNT30") {
  console.log(price * 0.7);
} else {
  console.log("Geçersiz indirim kodu girdiniz");
} */

/* Example-7
Bir çalışanın performans puanına göre bonus hesaplayan bir ternary ifadesi yazın. 
Performans puanı 90 ve üzeri ise bonus %20, 80-89 arası ise %10, 70-79 arası ise %5, 70'in altı ise bonus yok.
Çalışanın maaşı 1000 birim olsun. */

const performanceScore = 85; // Bu değeri değiştirerek test edin.
const salary = 1000;

const bonusToplam =
  performanceScore <= 100 && performanceScore >= 90
    ? console.log(salary * 1.2)
    : performanceScore <= 89 && performanceScore >= 80
    ? console.log(salary * 1.1)
    : performanceScore <= 79 && performanceScore >= 70
    ? console.log(salary * 1.05)
    : performanceScore <= 70 && performanceScore >= 0
    ? console.log("Bonus yok")
    : console.log("Yanlış değer girdiniz");
