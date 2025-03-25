function generateTodo(todo) {
  const elDivBlock = document.createElement('div')
  const elH3 = document.createElement('h3')
  const elP = document.createElement('p')
  const elButton = document.createElement('button')

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

function renderContainer(todos) {
  const elContainer = document.querySelector('.container')
  elContainer.innerHTML = ''
  for (const todo of todos) {
    const elGenerate = generateTodo(todo)
    elContainer.appendChild(elGenerate)
  }
}
