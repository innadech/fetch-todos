function handleLoad() {
  model.loadTodos()
  console.log(model.todos)
  renderContainer(model.todos)
}
