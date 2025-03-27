const view = {
  renderContainer(todos) {
    const elContainer = document.querySelector('.container')
    elContainer.innerHTML = ''
    for (const todo of todos) {
      const elGenerate = generateTodo(todo)
      elContainer.appendChild(elGenerate)
    }
  },
}

function onClickButtonLoad() {
  controller.handleLoadApp()
}

function onClickButtonRemoveTodo(e) {
  const id = e.target.parentElement.getAttribute('todo-id')
  console.log(id)
  controller.handleRemoveTodo(id)
}

function onClickP(e) {
  const id = e.target
  const title = prompt('Введите новый title')
  handleUpdateTitleById(id, title)
  // if (title !== null) {
  //   elP.innerHTML = newText
  // }
}

function generateTodo(todo) {
  const elDivBlock = document.createElement('div')
  const elH3 = document.createElement('h3')
  const elP = document.createElement('p')
  const elButton = document.createElement('button')
  elButton.onclick = onClickButtonRemoveTodo
  elP.onclick = onClickP

  elDivBlock.setAttribute('todo-id', todo.id)
  elDivBlock.classList.add('block')
  elButton.classList.add('btn')
  elButton.classList.add('close-btn')

  elH3.textContent = todo.id
  elP.textContent = todo.title
  elButton.textContent = 'Закрыть'

  elDivBlock.appendChild(elH3)
  elDivBlock.appendChild(elP)
  elDivBlock.appendChild(elButton)
  return elDivBlock
}

document.querySelector('.load-btn').onclick = onClickButtonLoad
