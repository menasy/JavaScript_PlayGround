window.localStorage.setItem('index', 0);
var list = JSON.parse(window.localStorage.getItem('list')) || [];
let ulDOM = document.querySelector("ul");
displayList();
function displayList()
{
	ulDOM.innerHTML = '';
	for (let i = 0; i < list.length; i++)
		ulDOM.innerHTML+=`          
			<li>
                <span>${list[i]}</span>
                <button class = "itemBut" type="button" onclick="removeElement(${i})" class="remove-btn">x</button>
            </li>
        `;
}
function removeElement(i)
{
	console.log("geldiiii", i);
	list.splice(i,1);
	window.localStorage.setItem('list', JSON.stringify(list));
	displayList();
}
function textHandler(){
	let inputText = document.getElementById("todoInput");
	console.log(inputText);

	let str =  inputText.value.trim();
	if (!str)
	{
		alert("Lütfen bir değer girin !"); 
		return;
	}
	inputText.value = ''
	list.push(str);
	window.localStorage.setItem('list', JSON.stringify(list));
	displayList();
}