import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./ducks";

export function configureStore() {
	const rootReducer = combineReducers({
		todos: reducers.todos
	});

	let store = createStore(rootReducer, applyMiddleware(thunk));
	return store;
}
