const notesObject = {

  showNotes: function () {
    let notes = localStorage.getItem('notes')
    let notesArr = JSON.parse(notes)

    if (notes == null) {

    } else {
      let noteEle = document.getElementById('notes')
      let html = ''
      notesArr = JSON.parse(notes)

      notesArr.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="notesObject.deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`
      })
      noteEle.innerHTML = html;
    }

  },

  addNotes: function () {
    let note = document.getElementById('addText').value;
    let noteObj = localStorage.getItem('notes');
    let noteArr = [];

    if (note == '') {
      console.log('in if section')
      return
    } else if (noteObj == null) {
      noteArr = []
    } else {
      noteArr = JSON.parse(noteObj)
    }
    noteArr.unshift(note)
    localStorage.setItem('notes', JSON.stringify(noteArr))
    this.showNotes()
    document.getElementById('addText').value = '';
  },

  deleteNotes: function (index) {
    let noteObj = localStorage.getItem('notes')
    let btn = document.getElementById(index)
    let noteArr = []
    if (noteObj == null) {

    } else {
      noteArr = JSON.parse(noteObj)
      noteArr.splice(index, 1)
      localStorage.setItem('notes', JSON.stringify(noteArr))
      btn.parentElement.parentElement.remove()
      this.showNotes()
    }
  },
}

function showNote() {
  let search = document.getElementById('searchKeyword')
  let searchWord = search.value.toLowerCase()
  console.log(searchWord)
  let noteCard = Array.from(document.getElementsByClassName('noteCard'))

  if (noteCard.length == 0) {

  } else {
    noteCard.forEach(function (element) {
      console.log(element.innerHTML)
      let searchStr = element.getElementsByTagName('p')[0].innerText

      if (searchStr.includes(searchWord)) {
        element.style.display = 'block'
      } else {
        element.style.display = 'none'
      }

    })
  }
}

notesObject.showNotes()
