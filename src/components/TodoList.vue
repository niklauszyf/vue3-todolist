<template>
  <div>test</div>
  <div>
    <el-input
      type="text"
      v-model="newTodo"
      placeholder="What needs to be done?"
      @keyup.enter="handleAddTodo"
    ></el-input>
  </div>
  <div>
    <ul v-show="showAllTodolist">
      <li v-for="todo in allTodolist" :key="todo.id">
        <TodoItem :todo="todo"></TodoItem>
      </li>
    </ul>
    <ul v-show="showActiveTodolist">
      <li v-for="todo in activeTodolist" :key="todo.id">
        <TodoItem :todo="todo"></TodoItem>
      </li>
    </ul>
    <ul v-show="showCompletedTodolist">
      <li v-for="todo in completedTodolist" :key="todo.id">
        <TodoItem :todo="todo"></TodoItem>
      </li>
    </ul>
  </div>
  <div>
    <el-button @click="handleShowAll">All</el-button>
    <el-button @click="handleShowActive">Active</el-button>
    <el-button @click="handleShowCompleted">Completed</el-button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore();
    const newTodo = ref("");
    let showAllTodolist = ref(true);
    let showActiveTodolist = ref(false);
    let showCompletedTodolist = ref(false);
    let todoList = computed(()=>store.state.todoList);

    let allTodolist = computed(()=>store.getters.allTodolist);
    let activeTodolist = computed(()=>store.getters.activeTodolist);
    let completedTodolist = computed(()=>store.getters.completedTodolist);



    const handleAddTodo=()=>{
      store.commit("addTodo",newTodo.value)
      newTodo.value = ''
    }

    const handleShowAll=()=>{
      showAllTodolist.value = true;
      showActiveTodolist.value = false;
      showCompletedTodolist.value = false;
    }

    const handleShowActive=()=>{
      showAllTodolist.value = false;
      showActiveTodolist.value = true;
      showCompletedTodolist.value = false;
    }

    const handleShowCompleted=()=>{
      showAllTodolist.value = false;
      showActiveTodolist.value = false;
      showCompletedTodolist.value = true;
    }


    return {
      newTodo,
      todoList,
      handleAddTodo,
      showAllTodolist,
      showActiveTodolist,
      showCompletedTodolist,
      handleShowAll,
      handleShowActive,
      handleShowCompleted,
      allTodolist,
      activeTodolist,
      completedTodolist
    };
  },
};
</script>

<style>
</style>