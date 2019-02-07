import { h, Component } from "preact";
import TodoElement from "./todo-element";
import { connect } from "preact-redux";
import { IAppState } from "../state/ducks";
import { todoOperations } from "../state/ducks/todo";
import { ITodosState } from "../state/ducks/todo/reducer";

interface TodoListProps {
	todoState: ITodosState;
	requestTodos: () => any;
}

class TodoList extends Component<TodoListProps, any> {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.requestTodos();
	}

	render() {
		const todos = [];
		for (let todo of this.props.todoState.todos) {
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

function mapStateToProps(state: IAppState) {
	return { todoState: state.todos };
}

const mapDispatchToProps = {
	requestTodos: todoOperations.requestTodos
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
