const controller = {
  async handleLoadApp() {
    const todos = await api.getTodos()
    storage.setTodos(todos)
    model.setTodos(todos)
    view.renderContainer(model.todos)
  },
  handleRemoveTodo(id) {
    const newTodos = model.removeTodoById(model.todos, id)
    model.setTodos(newTodos)
    storage.setTodos(newTodos)
    console.log(newTodos)
    view.renderContainer(model.todos)
  },
}
