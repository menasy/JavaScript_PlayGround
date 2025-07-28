import { getData } from "../lib/service.js";

getData(2).then(
(data)=>{
console.log(`${2}.User:`)
console.log(data);
} 
).catch((err) =>{
	console.error("Error:",err);
})