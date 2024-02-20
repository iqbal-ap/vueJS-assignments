<template>
    <div class="col">
      <form @submit.prevent="addNewTodo">
        <div class="row">
            <input class="form-control" type="text" v-model="newTodoText" placeholder="Enter your todo.." />
            <input class="form-control" type="date" id="date" v-model="selectedDate">
            <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      <TodoItems :todos="todos" @deleteTodo="deleteTodo" @changeStatusTodo="changeStatusTodo" />
    </div>
  </template>
  
  <script>
  import TodoItems from "./TodoItems.vue";
  
  export default {
    name: "TodoBoard",
    components: {
      TodoItems,
    },
    props: ["todos"],
    data() {
      return {
        selectedDate: null,
        newTodoText: "",
      };
    },
    methods: {
      addNewTodo() {
        const createdDate = new Date(Date.now());
        const dueDate = new Date(this.selectedDate);

        if (this.newTodoText.trim() !== "" 
        && this.selectedDate !== null 
        && dueDate.getTime() > createdDate.getTime()) {
          const newTodo = {
            id: crypto.randomUUID(),
            createdWhen: createdDate.toISOString().split('T')[0],
            text: this.newTodoText,
            active: true,
            deadline: dueDate.toISOString().split('T')[0],
          };
          this.$emit("addTodo", newTodo);
          this.newTodoText = "";
        }
      },
      deleteTodo(todoId) {
        this.$emit("deleteTodo", todoId);
      },
      changeStatusTodo(todoId) {
        this.$emit("changeStatusTodo", todoId);
      },
    },
  };
  </script>

<style>
</style>
  