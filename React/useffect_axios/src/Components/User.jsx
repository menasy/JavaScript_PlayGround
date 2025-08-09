import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import { waitFor } from "@testing-library/dom";

function User() {
	const [isLoading, setIslaoding] = useState(true);
	const [users,setUsers] = useState([]);
	useEffect(()=>
		{
			// buray bekletme ekle 
			const timeoutId = setTimeout(() => {
				axios("https://jsonplaceholder.typicode.com/users")
				.then((res) => res.data)
				.then((user) => setUsers(user))
				.catch((e)=> console.log("Axios error: ", e))
				.finally(setIslaoding(false))
			}, 2000);
			
			return(() => {
				console.log("Component temizleniyor...");
				clearTimeout(timeoutId); // setTimeout'u iptal et
			})
		}, []);
  return (
	<div className="user" style={{textAlign:"center"}}>
		{
			isLoading ? (<p className="animate-pulse">Loading...</p>):
			(
				users.map((user) =>(
					<div key=  {user.id}>
						<div class="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-24">
    <div class="bg-gray-100 px-4 py-2">
        <h2 class="text-lg font-medium text-gray-800">{user.name}</h2>
    </div>
    <div class="px-4 py-5 sm:p-6">
        <div class="flex flex-col items-start justify-between mb-6">
            <span class="text-sm font-medium text-gray-600">{user.username}</span>
            <span class="text-lg font-medium text-gray-800">John Doe</span>
        </div>
        <div class="flex flex-col items-start justify-between mb-6">
            <span class="text-sm font-medium text-gray-600">Card Number</span>
            <span class="text-lg font-medium text-gray-800">**** **** **** 1234</span>
        </div>
        <div class="flex flex-row items-center justify-between mb-6">
            <div class="flex flex-col items-start">
                <span class="text-sm font-medium text-gray-600">Expiration Date</span>
                <span class="text-lg font-medium text-gray-800">12/24</span>
            </div>
            <div class="flex flex-col items-start">
                <span class="text-sm font-medium text-gray-600">CVV</span>
                <span class="text-lg font-medium text-gray-800">***</span>
            </div>
        </div>
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col items-start">
                <span class="text-sm font-medium text-gray-600">Credit Limit</span>
                <span class="text-lg font-medium text-gray-800">$10,000</span>
            </div>
            <div class="flex flex-col items-start">
                <span class="text-sm font-medium text-gray-600">Available Balance</span>
                <span class="text-lg font-medium text-gray-800">$7,500</span>
            </div>
        </div>
    </div>
</div>
					</div>
				))
			)
		}
	</div>
  );
}
export default User