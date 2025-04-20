import React from "react";
import { TodoList } from "./TodoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="display-2 fw-bold mb-5">TO DO LIST</h1>
			<TodoList/>
		</div>
	);
};

export default Home;