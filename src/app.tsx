require("./style.css");
import { h, Component } from "preact";
import TodoList from "./todo/todolist/todolist.component";

export default class App extends Component {
	render() {
		return (
			<div>
				<TodoList />
			</div>
		);
	}
}
