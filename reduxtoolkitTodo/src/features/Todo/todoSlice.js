import  {createSlice , nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [{}]
}
// 
// function sayHello

export const  todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const todo = {
                id: nanoid(), 
                text : action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state ,action) => {
            if (state.id === todo.id) {
                action.payload.text = todo.text;
            }
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer