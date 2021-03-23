<template>
  <div>
    <todo-list></todo-list>
    <!-- <div>{{array}}</div>
    <el-button @click="handleChange"></el-button> -->
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
// import {computed, reactive} from "vue";
export default {
  name: "App",
  components: {
    TodoList
  },
  setup() {
    // let obj=reactive({arr:[1,2,3]})
    // let array= computed(()=>obj.arr)
    // const handleChange=()=>{
    //   obj.arr=obj.arr.filter((item)=>item!==2)
    // }
    // let array=reactive([1,2,3])
    // let arr = computed(()=>array)
    // const handleChange=()=>{
    //   arr=[4,5,6]
    // }


    return {
      // array,
      // handleChange
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
