import actions from "./actions";

const requestTodos = () => (dispatch: any) => {
	dispatch(actions.requestTodos());
	const todos = [
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
	dispatch(actions.requestTodosSuccess(todos));
};

export default {
	requestTodos
};
