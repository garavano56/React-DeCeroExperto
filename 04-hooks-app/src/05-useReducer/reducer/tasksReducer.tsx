interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

export const getTasksInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('tasks-state');
    if (!localStorageState) {
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        }
    }

    //!  Cuidado el objeto puede haber sido manipulado
    return JSON.parse(localStorageState);
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            // ! No lo deben de hacer
            // state.todos.push(newTodo)

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            };
        }

        case 'DELETE_TODO':
            const currentTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
            
            const completedTodos = currentTodos.filter((todo) => todo.completed).length;
            const pendingTodos = currentTodos.length - completedTodos;

            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: completedTodos,
                pending: pendingTodos,
            };

        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) => {
            if (todo.id === action.payload) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
                length: updatedTodos.length,
                completed: updatedTodos.filter((todo) => todo.completed).length,
                pending: updatedTodos.filter((todo) => !todo.completed).length,
            };
        }

        default:
            return state;
    }
};