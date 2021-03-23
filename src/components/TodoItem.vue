<template>
  <div>
    <p :class="[todo.state==='completed' ? 'completed':'']">{{todo.text}}</p>
    <el-button @click="handleRemove">Remove</el-button>
    <el-button @click="handleComplted">Completed</el-button>
  </div>
</template>

<script>
import {useStore} from "vuex";
export default {
  props:["todo"],
  setup(props) {
    const store= useStore();

    const handleRemove=()=>{
      store.commit("removeTodo",props.todo.id)
    }

    const handleComplted=()=>{
      store.commit("completeTodo",props.todo.id)
    }
    return {
      handleRemove,
      handleComplted
    }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>