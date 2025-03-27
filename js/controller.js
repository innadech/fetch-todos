const controller = {
  async handleLoadApp() {
    const todos = await api.getTodos()
    storage.setTodos(todos)
    model.setTodos(todos)
    view.renderContainer(model.todos)
  },

  handleUpdateTitleById(id, title) {
    model.updateTodoTitleById(id, title)
    view.renderContainer(model.todos)
  },

  handleRemoveTodo(id) {
    model.removeTodoById(+id)
    console.log(model.todos)
    storage.setTodos(model.todos)
    // console.log(newTodos)
    view.renderContainer(model.todos)
  },
}
