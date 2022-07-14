// const elList = document.querySelector(".js-list")
// const elInput = document.querySelector(".js-input")
// const elForm = document.querySelector(".js-form")

// const renderTodo = (array, node) => {
//   node.innerHTML = ""
//   array.forEach(e => {
//     const newItem = document.createElement("li")
//     newItem.textContent = e.Title

//     node.appendChild(newItem);
//   })
// }

// fetch('https://www.omdbapi.com/?apikey=ace38ff2&s=iron')
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.length) {
//       renderTodo(data, elList)
//     }
//   })

  let newLIst = document.querySelector('.js-list')
  const elInput = document.querySelector(".js-input")
  const elForm = document.querySelector(".js-form")

    let renderTodo = (array, node) => {
      let newObj = array.Search
      console.log(newObj)
      newObj.forEach(element => {
        let newItem = document.createElement('li')
       let newImg = document.createElement('img')
       let newTitle = document.createElement('p')
       let newYear = document.createElement('p')
       let newImd = document.createElement('p')
       let newType = document.createElement('p')
        
        newYear.textContent ='Year:'+ ' ' +  element.Year
        newImg.src = element.Poster
        newTitle.textContent = element.Title
        newImd.textContent = 'imdbID:'+ ' ' + element.imdbID
        newType.textContent ='Type:'+ ' ' + element.Type

        newItem.setAttribute('class' , 'item')
        newTitle.setAttribute('class' , 'title')
        newImg.setAttribute('class' , 'img')

        newItem.appendChild(newTitle)
        newItem.appendChild(newImg)
        newItem.appendChild(newYear)
        newItem.appendChild(newImd)
        newItem.appendChild(newType)

    node.appendChild(newItem)
  });
}
  elForm.addEventListener('submit' , function(evt){
    newLIst.innerHTML = ''
    evt.preventDefault();
    const elInputVal = elInput.value
    async function getPosts(end) {
      const response = await fetch(`https://www.omdbapi.com/?apikey=ace38ff2&s=${end}`);
      const data = await response.json();
      renderTodo(data,newLIst)
      console.log(response)
    }
    getPosts(elInputVal)
  })














// ace38ff2