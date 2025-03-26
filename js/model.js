const model = {
  todos: [],

  setTodos(todos) {
    this.todos = todos
  },

  // addTodo(todo) {
  //   this.todos.push(todo)
  // },

  removeTodoById(todos, id) {
    return todos.filter(todo => todo.id !== id)
  },
  // removeContactById(id) {
  //   function helper(contact) {
  //     return contact.id !== id
  //   }
  //   this.contacts = this.contacts.filter(helper)
  // },
}
