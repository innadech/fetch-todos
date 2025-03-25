const api = {
  async getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    const resp = await fetch(url)
    const json = await resp.json()
    return json
  },
}
