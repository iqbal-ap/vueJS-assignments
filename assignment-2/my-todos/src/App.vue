<template>
  <div class="container">
    <h1>My Todos</h1>
    <TodoBoard :todos="todos" @addTodo="addTodo" @deleteTodo="deleteTodo" @changeStatusTodo="changeStatusTodo" />
  </div>
</template>

<script>
import TodoBoard from "./components/TodoBoard.vue";

export default {
  name: "App",
  components: {
    TodoBoard,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    changeStatusTodo(todoId) {
      const selectedTodo = this.todos.find(todo => todo.id === todoId);
      selectedTodo.active = !selectedTodo.active;
    },
  },
};
</script>

<style>
</style>