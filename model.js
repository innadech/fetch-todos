//  let todos = []
//
// async function fetchData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
//   const json = await response.json()
//   todos.push(json)
//   console.log(todos)
// }

model = {
  todos: [],
  async loadTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    this.todos = await response.json()
    console.log(this.todos)
  },
}

// model.loadTodos()
// let answer = model.todos
// answer
