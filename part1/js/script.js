//------------------------------- VAR----------------------------------
// Var ile tanımlandığında function scope ozelliği olur yan i bir iç scope de olsa bile
// Dışarıdaki scopelerden erişilebilir.
function varCheck(checkVal) {
  if (checkVal < 0) {
    var varVal;
    varVal = -1;
  } else varVal = 1;
  return varVal;
}
let res = varCheck(-1);
console.log(`VarRes: ${res}`);

//------------------------------- LET / CONST ----------------------------------
//Let scope dışına çıkmaz normal deiğşkenler gibi çalışır C deki gibi.
// Guncel olarak kullanılan değişken tipi de Let tir.
// Var çok kulanılmaz. Bu kod hata verir else  koşulunda ve returnda letVal diye bir değişken olmadığı için
// Const da aynı şekilde çalışır fakat değiştirilemezdir.
function letCheck(checkVal) {
  //let letVal; -> değişken tanımlası buraya alınıp if içindeki silinirse çalışır kod
  if (checkVal < 0) {
    let letVal;
    letVal = -1;
  } else letVal = 1;
  return letVal;
}
res = letCheck(2);
console.log(`LetRes: ${res}`);

console.log(
  "----------------------- Print Format And Type Check -----------------------"
);
num = 1;
str = " str";
// 1. Template Literals (Backticks) - En modern ve okunabilir
console.log(`SumCheck: ${num + str}`);
console.log("MinusCheck: " + (num - str));

// 3. Comma separated values - Otomatik boşluk ekler
console.log("MultipleCheck: ", num * str);
// 4. Object destructuring ile label
console.log({ DivisionCheck: num / str });

// 5. Console.table ile tablo halinde
console.table({
  Toplama: num + str,
  Çıkarma: num - str,
  Çarpma: num * str,
  Bölme: str / num,
});
// 6. Printf style formatting (%s, %d, %f)
console.log("String: %s, Number: %d", "Sonuç", num);
// 7. JSON.stringify ile object olarak
console.log(
  "JSON formatında:",
  JSON.stringify(
    {
      num: num,
      str: str,
      toplam: num + str,
    },
    null,
    2
  )
); //  -> null ekstra configler için, 2 ise girinti miktarını belirityor 2 boşluk.

console.log("------------------------- Veriable Defination Rules -----------------");
// Const ile tanımlanan değişkenler buyuk harflerle tanımlanırsa daha iyi. CONST_VER şeklinde.
let $_Val_ = "val";
console.log("Veriable Defination Check:" + $_Val_);
// document.writeln($_Val_);
console.log("------------------------- Boolean Rules -----------------");
console.log("Bool: ", Boolean(""));
console.log("Bool Float: ", Boolean(-0.1));
console.log("Bool: ", Boolean(-0));
console.log("Bool Zero: ", Boolean(0));
console.log("Bool Operator: ", Boolean("0" === 0)); // strict equality -> false
console.log("Bool Operator: ", Boolean("0" == 0)); // loose equality -> true
/*
		=== (Strict Equality - Katı Eşitlik)
			Hem değer hem de tip kontrolü yapar
			Tip dönüşümü yapmaz
			Daha güvenli ve önerilen yöntem
		== (Loose Equality - Gevşek Eşitlik)
			Sadece değer kontrolü yapar
			Gerektiğinde tip dönüşümü yapar
			Beklenmedik sonuçlar verebilir
*/
// İçinde değer barındırmayan tüm ifadeler false 'tur.
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);

console.log(Boolean(1n));
console.log(Boolean(-1n)); // Buyuk sayılar için kullanılır "n"
console.log(Boolean(Infinity));
console.log(Boolean({})); // Boş object oluşur 
console.log(Boolean(Symbol())); // eşsiz key ouşturur


console.log("----------------------------- STRING ------------------------");

let str = "menasy@gmail.com";
// C deki gibi index ile erişim var 
let index = 0;
console.log(`index[${index}]: ${str[index]}`);