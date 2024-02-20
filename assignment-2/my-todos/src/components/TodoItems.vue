<template>
    <div class="col m-2">
        <div class="card m-2" v-for="todo in todos" :key="todo.id">
          <div class="card-body">
            <input class="form-check-input" type="checkbox" @change="changeStatus(todo.id)">
            <h5 class="card-title" :class="{ done: !todo.active }">{{ todo.text }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary" :class="{ done: !todo.active }">Due date: {{ todo.deadline }}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary" :class="{ done: !todo.active }">Created at: {{ todo.createdWhen }}</h6>
            <button class="btn btn-danger" @click="deleteThis(todo.id)">Delete</button>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TodoItems",
    props: ["todos"],
    methods: {
      deleteThis(todoId) {
        this.$emit("deleteTodo", todoId);
      },
      changeStatus(todoId) {
        this.$emit("changeStatusTodo", todoId);
      },
    },
  };
  </script>
  
  <style scoped>
  .done {
    text-decoration: line-through;
  }
  </style>
  