let fullName = prompt("Adınızı Giriniz: ");

if (fullName)
{
	let nameText = document.querySelector("h2");
	let dateH3 = document.querySelector("h3");
	let pVal = document.querySelector("p");

	const dayOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
	nameText.innerHTML = `Merhaba, <strong>${fullName} !</strong> Hoş Geldin`
	nameText.style.color = "blue";
	date =  new Date();

	let day = dayOfWeek[date.getDay()];
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	dateH3.style.color = "yellow";
	dateH3.style.fontSize = "25px";
	dateH3.innerHTML= `${hours}:${minutes}:${seconds} ${day} `;
	pVal.innerHTML = `tarihinde <strong>Kodluyoruz  Frontend  Web Devolopment Patikası'nın </strong> Javascript bölümünün 1. bölümündesiniz`;
	pVal.style.color = "yellow";
	pVal.style.fontSize = "20px";
}
else
{
	alert("Lütfen adınızı giriniz.");
	document.querySelector("h2").innerHTML = "Merhaba, Lütfen adınızı giriniz.";
	document.querySelector("h2").style.color = "red";
	document.querySelector("h3").innerHTML = "";
	document.querySelector("p").innerHTML = "";
}