import { ITodosState } from "./todo/reducer";
export { default as todos } from "./todo";

export interface IAppState {
	todos: ITodosState;
}
