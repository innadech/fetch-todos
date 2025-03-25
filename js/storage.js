const storage = {
  setTodos(todos) {
    const stringifiedTodos = JSON.stringify(todos)
    localStorage.setItem('todos', stringifiedTodos)
  },

  getTodos() {
    const stringifiedTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(stringifiedTodos)
    return parsedTodos
  },
}
