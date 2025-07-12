

//------------------------------------ Functions ------------------------------------
// JS de asenkron ayapı var yani  bloklama olmaz iki fonksiyon aynı anda çalışır.
// bir fonksiyonujn işini bitirmeis beklenmez diğerleri işlenir.

function f1() {
  console.log("Function f1 is called");
}
function f2() {
  setTimeout(() => {
	console.log("Function f2 is called after 2 seconds");
  }, 1000);
}
function f3() {
  console.log("Function f3 is called");
}
f1();
f2();
f3();

// Fonksiyona parametre olarak fonksiyon da gonderilebiliyor
console.log("---------------------- CallBack ----------------------------");
// Callback Functions
function fun1(){
	  console.log("Function fun1 is called");
}
function fun2() {
	  console.log("Function fun2 is called");	
	}
function fun3(callback, callback2) {
	  console.log("Function fun3 is called");
	  callback();
	  callback2();
}

fun3(fun1, fun2);

console.log("---------------------- Arrow Functions ----------------------------");

// fonksiyon işlevi direkt değişkene atanır.
// bu değişken daha sonra çağrılabilir.
// fonksiyon çağrısı bu değişken ustunden olur.

const sumNum = (a,b) => (a + b);
console.log("Sum of 5 and 10 is: ", sumNum(5, 10)); // Çağrılma işlemi

const sqrtNum = (a) =>{
	  console.log("Square root of " + a + " is: " + Math.sqrt(a));
	  return Math.sqrt(a);
}

sqrtNum(25); // -> bu şekilde çağrılır

console.log("---------------------- Async Functions ----------------------------");

let list = document.querySelector("#list");
if (!list)
	console.log("Alinamadı");
listItem = list.querySelectorAll("li");
listItem.forEach((element,index) => {
	element.innerHTML = `<li>
	${index} -> ${element.innerHTML} </li>`
});
printList(putNum(listItem));
