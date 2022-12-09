document.addEventListener("DOMContentLoaded", () => {
  let todo = document.querySelector('form')
    
    todo.addEventListener('submit', (e) => {
      e.preventDefault()
      addTask(e.target.task.value);

    })
  });

  function addTask(e){
    let p = document.createElement('p')
    p.textContent = e
    document.querySelector('#main-content').appendChild(p)


  }