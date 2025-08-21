import React, { useState } from 'react'
import { sendMessage } from '../backend/client';

function Message() {
	const [userMsg, setUserMsg] = useState("");

	const handleBut = () => {
		if (userMsg.trim()) { 
			sendMessage(userMsg);
			setUserMsg("");
		}
	};

	return (
		<div>
			<div className='TakeMessage'>
				<input
					type='text'
					value={userMsg}
					placeholder="Mesajınızı yazın..."
					onChange={(e) => setUserMsg(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && handleBut()}
				/>
				<button
					onClick={handleBut}
					disabled={!userMsg.trim()}
				>
					Send Message
				</button>
			</div>
		</div>
	)
}

export default Message