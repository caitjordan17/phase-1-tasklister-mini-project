document.addEventListener("DOMContentLoaded", () => {
  let task = document.querySelector('#new-task-description')
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    buildToDo(task.value)
    form.reset()
  })
});

function buildToDo(todo){
  console.log(todo)
  let btn = document.createElement('button')
  let p = document.createElement('p')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = ` ${todo} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}