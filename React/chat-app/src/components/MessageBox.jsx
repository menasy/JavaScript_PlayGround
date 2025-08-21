import React from 'react'
import { takeId } from '../backend/client'

function MessageBox({ activeMessages }) {
	return (
		<div>
			<div className="MessageBox">
				{
					activeMessages.map((item, index) => (
						<div 
							key={index}
                            className={item.socketId === takeId() ? "MessageItem self" : "MessageItem other"}
						>
							{item.fullMessage}
						</div>
					))}
			</div>
		</div>
	)
}

export default MessageBox