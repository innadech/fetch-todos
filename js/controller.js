const controller = {
  async handleLoadApp() {
    const todos = await api.getTodos()
    storage.setTodos(todos)
    model.setTodos(todos)
    view.renderContainer(model.todos)
  },
  handleRemoveTodo(id) {
    model.removeTodoById(model.todos, +id)
    console.log(model.todos)
    storage.setTodos(model.todos)
    // console.log(newTodos)
    view.renderContainer(model.todos)
  },
}
