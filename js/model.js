const model = {
  todos: [],

  setTodos(todos) {
    this.todos = todos
  },

  addTodo(todo) {
    this.todos.push(todo)
  },
}
