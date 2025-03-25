const controller = {
  async handleLoadApp() {
    const todos = await api.getTodos()
    storage.setTodos(todos)
    model.setTodos(todos)
    view.renderContainer(model.todos)
  },
}
