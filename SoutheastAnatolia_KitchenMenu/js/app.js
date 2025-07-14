const menu = [
  {
    id: 1,
    title: "Ciğer Kebabı",
    category: "Diyarbakır",
    price: 21,
    img: "../images/Diyarbakir/ciger_kebabi.jpeg",
    desc: "Közde pişen ciğer şiş, sumaklı soğan ve lavaşla servis."
  },
  {
    id: 2,
    title: "Ayvalı Kavurma",
    category: "Diyarbakır",
    price: 21.73,
    img: "../images/Diyarbakir/ayvali_kavurma.jpeg",
    desc: "Kuzu eti, ayva ve baharatla ağır ateşte pişirilmiş geleneksel lezzet."
  },
  {
    id: 3,
    title: "Mahlepli Çörek",
    category: "Diyarbakır",
    price: 21.47,
    img: "../images/Diyarbakir/mahlepli_diyarbakir_coregi.jpeg",
    desc: "Mahlep aromalı, susamlı yumuşak çörek."
  },
  {
    id: 4,
    title: "Kaburga Dolması",
    category: "Mardin",
    price: 47,
    img: "../images/Mardin/kaburga_dolmasi.jpeg",
    desc: "Baharatlı pirinçle doldurulmuş kuzunun yavaş fırınlanmış kaburgası."
  },
  {
    id: 5,
    title: "Mumbar Dolması",
    category: "Mardin",
    price: 47.47,
    img: "../images/Mardin/Mumbar-Dolmasi.jpg",
    desc: "Baharatlı pirinçle doldurulmuş ince bağırsak; sarımsaklı sosla servis."
  },
  {
    id: 6,
    title: "Soğan Kebabı",
    category: "Mardin",
    price: 47.73,
    img: "../images/Mardin/sogan-kebabi.jpeg",
    desc: "Soğan halkalarına sarılmış köfte; nar ekşili fırın lezzeti."
  },
  {
    id: 7,
    title: "Perde Pilavı",
    category: "Şırnak",
    price: 73,
    img: "../images/Sirnak/perdePilavi.jpg",
    desc: "Bademli, tavuklu pilavın ince hamur içinde fırınlanmış şık sunumu."
  },
  {
    id: 8,
    title: "Kutılk",
    category: "Şırnak",
    price: 73.73,
    img: "../images/Sirnak/kutilk.jpeg",
    desc: "Bulgurlu iç harçla hazırlanan minik haşlama köfteler, yoğurt soslu."
  },
  {
    id: 9,
    title: "Şam Börek",
    category: "Şırnak",
    price: 73.47,
    img: "../images/Sirnak/sam_borek.jpeg",
    desc: "Kıymalı harçla ince yufkanın odun fırınında çıtır pişmiş hali."
  }
];

const itemsClass = document.getElementById('items');
allHandler();
function takeCategories()
{
	let categories = new Set();
	menu.forEach(element => {
		categories.push(element.category);
	});
	return Array.from(categories);
}

function crateItem(item)
{
	  return `
    <article class="menu-item">
      <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>
  `;
}
// Filter handler functions

function putItem(categori)
{
	const resMenu = menu.filter(item => item.category === categori);
	const htmlItem = resMenu.map(crateItem);
	itemsClass.innerHTML = htmlItem.join('');
}

function allHandler() {
	let allMenu = menu.reduce((acc, item) => {
		acc.push(crateItem(item));
		return acc;
	}, []);
	itemsClass.innerHTML = allMenu.join('');
}
