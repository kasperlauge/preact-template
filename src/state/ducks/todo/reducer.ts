import { Todo } from "../../../models/todos/todo";
import { ITodoStateAction } from "./actions";
import {
	REQUEST_TODOS,
	REQUEST_TODOS_SUCCESS,
	REQUEST_TODOS_ERROR
} from "./types";

export interface ITodosState {
	loading: boolean;
	todos: Todo[];
	error: string;
}

export const initialState: ITodosState = {
	loading: true,
	todos: [],
	error: null
};

const todoReducer = (
	state: ITodosState = initialState,
	action: ITodoStateAction
) => {
	switch (action.type) {
		case REQUEST_TODOS:
			return Object.assign({}, state, { loading: true });
		case REQUEST_TODOS_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				todos: action.todos
			});
		case REQUEST_TODOS_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.error
			});
		default:
			return state;
	}
};

export default todoReducer;
