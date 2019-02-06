import { h, Component } from "preact";
import TodoElement from "./todo-element";

export default class TodoList extends Component {
	state: any;
	constructor() {
		super();
		// set initial time:
		this.state.todos = [
			{
				name: "Read up on wireless",
				done: false
			},
			{
				name: "Buy christmas gifts",
				done: false
			},
			{
				name: "Eat",
				done: true
			}
		];
	}

	render() {
		const todos = [];
		for (let todo of this.state.todos) {
			todos.push(<TodoElement name={todo.name} done={todo.done} />);
		}
		return (
			<div>
				<h1>TodoList</h1>
				{todos}
			</div>
		);
	}
}
