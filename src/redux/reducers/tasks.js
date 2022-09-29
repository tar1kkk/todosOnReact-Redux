const ADD = 'ADD';
const DEL = 'DEL';
const IMP = 'IMP'

const initialState = {
	todos: [{
		title: 'Пойти гулять',
		isDelete: false,
		isImportant: false,
		isDone: false,
		id: 23231231
	}],
	count: 1,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD: {
			return {
				...state,
				todos: [...state.todos, {
					title: action.title,
					isDelete: false,
					isImportant: false,
					isDone: false,
					id: Math.floor(Math.random() * 100000)
				}],
				count: state.count + 1
			}
		}
		case DEL: {
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.id),
				count: state.count - 1
			}
		}
		case IMP: {
			return {
				...state,
				todos: state.todos.map((item) => {
					if (item.id === action.id) {
						return { ...item, isImportant: !item.isImportant }
					}
					return item
				})
			}
		}
		default: return state;
	}
};

export const addTask = (title) => {
	return (dispatch) => {
		return dispatch({ type: ADD, title });
	}
};

export const deleteTask = (id) => {
	return (dispatch) => {
		return dispatch({ type: DEL, id })
	}
};

export const doImportant = (id) => {
	return (dispatch) => {
		return dispatch({ type: IMP, id })
	}
};