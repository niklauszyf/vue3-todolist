import { createStore } from "vuex";

export default createStore({
  state: {
    id:0,
    todoList:[],
  },
  mutations: {
    addTodo (state,newTodo) {
      state.todoList.push({
        id: state.id++,
        text: newTodo,
        state:"active"
      });
    },
    removeTodo(state,id){
      return state.todoList=state.todoList.filter((todo)=>todo.id!==id)
    },
    completeTodo(state,id){
      const todo = state.todoList.find((todo)=>todo.id===id)
      if(todo){
        todo.state="completed"
      }
    }
  },
  getters:{
    allTodolist(state){
      return state.todoList
    },
    activeTodolist:(state)=>{
      return state.todoList.filter((todo)=>todo.state==="active")
    },
    completedTodolist:(state) =>{
      return state.todoList.filter((todo)=>todo.state==="completed")
    } 
  },
  actions: {},
  modules: {},
});
