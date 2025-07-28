import axios from "axios"
const BASE_URL = "https://jsonplaceholder.typicode.com/";
export async function getData(userId) {
	try {
		const {data: user} = await axios(`${BASE_URL}users/${userId}`);
		const {data: posts} = await axios(`${BASE_URL}posts?userId=${userId}`);
		return {user, posts};
	} catch (error) {
		throw error;
	}
}