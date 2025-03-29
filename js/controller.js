const controller = {
  async handleLoadApp() {
    const todos = await api.getTodos()
    if (todos == false) {
      todos = storage.getTodos()
    }
    storage.setTodos(todos)
    model.setTodos(todos)
    view.renderContainer(model.todos)
  },

  handleUpdateTitleById(id, title) {
    model.updateTodoTitleById(+id, title)
    storage.setTodos(model.todos)
    view.renderContainer(model.todos)
  },

  handleRemoveTodo(id) {
    model.removeTodoById(+id)
    console.log(model.todos)
    storage.setTodos(model.todos)
    view.renderContainer(model.todos)
  },
}
