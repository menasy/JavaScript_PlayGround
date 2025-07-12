console.log(document.URL);
let btn = document.getElementById("btn");
if (btn)
  btn.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
    setTimeout(() => {
      document.body.style.backgroundColor = "";
    }, 750);
    console.log("Button clicked!");
  });
let h1Obj = document.getElementsByTagName("h1");
console.log(h1Obj[0].innerText);

let link = document.querySelectorAll("div>ul>li>a");
link.forEach((element) => {
  console.log("link: ", element.innerText);
});

// ----------------------------------------  Prompt kullanımı ve girdi alma ---------------------
// Prompt() kullanıcıya soru sorup klavyeden girilen bilgiyle işlem yapan, o bilgiyi döndüren bir window metodudur. alert() gibi Html üzerinde, HTML sayfasından bağımsız çalışır ve karşımıza diyalog penceresi şeklinde çıkar.
// let fullName = prompt("Enter your name:");
// let greeting = document.querySelector("#greeting");
// greeting.innerText = "Hello, " + fullName + "!";
// ----------------------------------------  Prompt kullanımı ve girdi alma ---------------------
let listItem = document.querySelector("#list");
if (!listItem)
	console.log("alınmadı");
else
	console.log("alındı");

listItem.querySelector("li:first-child").innerText = "Changed Element";
listItem.querySelector("li:first-child").style.color = "red"; // İlk elemanı kırmızı yapar
listItem.querySelector("li:last-child").style.color = "blue"; // Son elemanı
let liElement = document.createElement('li');
liElement.innerHTML ="New Element";
listItem.append(liElement);
//------------------------ Listeden Eleman Seçme / first-child, last-child, children, childNodes --------------------- 
