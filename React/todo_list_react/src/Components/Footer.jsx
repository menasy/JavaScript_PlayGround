import React from "react";

function Footer({ todos, filter, setFilter, clearCompleted }) {
	const activeCount = todos.filter((todo) => !todo.done).length;
	const completedCount = todos.filter((todo) => todo.done).length;

	return (
		<footer className="footer" hidden={todos.length === 0}>
			<span className="todo-count">{activeCount} items left</span>
			<ul className="filters">
				<li>
					<button
						className={filter === "all" ? "selected" : ""}
						onClick={() => setFilter("all")}
					>
						All
					</button>
				</li>
				<li>
					<button
						className={filter === "active" ? "selected" : ""}
						onClick={() => setFilter("active")}
					>
						Active
					</button>
				</li>
				<li>
					<button
						className={filter === "completed" ? "selected" : ""}
						onClick={() => setFilter("completed")}
					>
						Completed
					</button>
				</li>
			</ul>
			{completedCount > 0 && (
				<button className="clear-completed" onClick={clearCompleted}>
					Clear completed
				</button>
			)}
		</footer>
	);
}

export default Footer;