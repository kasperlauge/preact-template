import { Action } from "redux";
import * as types from "./types";
import { Todo } from "../../../models/todos/todo";

export interface IReceiveTodosSuccess extends Action {
	type: types.REQUEST_TODOS_SUCCESS;
	todos: Todo[];
}

export interface IReceiveTodosError extends Action {
	type: types.REQUEST_TODOS_ERROR;
	error: string;
}

export interface IRequestTodos extends Action {
	type: types.REQUEST_TODOS;
}

export type ITodoStateAction =
	| IReceiveTodosSuccess
	| IReceiveTodosError
	| IRequestTodos;

const requestTodos = (): IRequestTodos => {
	return {
		type: types.REQUEST_TODOS
	};
};

const requestTodosSuccess = (todos: Todo[]): IReceiveTodosSuccess => {
	return {
		type: types.REQUEST_TODOS_SUCCESS,
		todos: todos
	};
};

const requestTodosError = (error: string): IReceiveTodosError => {
	return {
		type: types.REQUEST_TODOS_ERROR,
		error: error
	};
};

export default {
	requestTodos,
	requestTodosSuccess,
	requestTodosError
};
