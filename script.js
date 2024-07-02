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

if (age >=18) {
    if(isVIP === true){
        console.log("Hoşgeldiniz, VIP Üye");
    } else{
        console.log("Hoşgeldiniz");
    }
} else{
    console.log("Giriş yapamazsınız.");
}

/* Example-3
Hava durumuna göre kıyafet önerisi veren bir if-else yapısı yazın.
Hava durumu "güneşli" ise "T-shirt giyin", "yağmurlu" ise "Şemsiye alın", "karlı" ise "Mont giyin" yazdırın. 
Diğer durumlar için "Hava durumunu kontrol edin" yazdırın.
const weather = "yağmurlu";  Bu değeri farklı hava durumlarıyla değiştirerek test edin. */

const weather = "karlı";

if (weather === "yağmurlu"){
    console.log("Şemsiye alın");
} else if (weather === "güneşli"){
    console.log("T-shirt giyin");
} else if(weather === "karlı"){
    console.log("Mont giyin");
} else {
    console.log("Siz bilirsiniz");
}