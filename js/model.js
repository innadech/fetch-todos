const model = {
  todos: [{ id: 33, title: 'yo' }],

  setTodos(todos) {
    this.todos = todos
  },

  // addTodo(todo) {
  //   this.todos.push(todo)
  // },

  removeTodoById(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  },

  updateTodoTitleById(id, title) {
    const todo = this.todos.find(t => t.id === id)
    todo.title = title
  },

  // removeContactById(id) {
  //   function helper(contact) {
  //     return contact.id !== id
  //   }
  //   this.contacts = this.contacts.filter(helper)
  // },
}
