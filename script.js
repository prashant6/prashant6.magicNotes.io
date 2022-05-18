const notesObject = {


  // function to show all the notes in the app
  showNotes: function () {
    let notes = localStorage.getItem('notes')
    let notesArr = JSON.parse(notes)


    if (notes == null || notesArr.length == 0) {

      document.getElementById('notes').innerText = 'You may want to add some notes'

    } else {

      let noteEle = document.getElementById('notes')
      let html = ''
      notesArr = JSON.parse(notes)

      notesArr.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.noteTitle}</h5>
            <p class="card-text"> ${element.noteMessage}</p>
            <button id="${index}"onclick="notesObject.deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`
      })
      noteEle.innerHTML = html;
    }

  },


  // function to add notes in the app
  addNotes: function () {
    let note = document.getElementById('addText').value;
    let noteObj = localStorage.getItem('notes');
    let noteArr = [];
    let title = document.getElementById('addTitle').value

    if (note == '' && title == '') {
      return
    } else if (noteObj == null) {
      noteArr = []
    } else {
      noteArr = JSON.parse(noteObj)
    }

    if(title == '') {
      title = "Note " + (noteArr.length + 1)
    }

    const singleNoteObject = {
      noteTitle: title,
      noteMessage: note
    }

    noteArr.unshift(singleNoteObject)
    localStorage.setItem('notes', JSON.stringify(noteArr))
    this.showNotes()
    document.getElementById('addText').value = '';
    document.getElementById('addTitle').value = '';
  },


  // function to delete notes in the app
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

// function to show the searched notes
function showNote() {
  let search = document.getElementById('searchKeyword')
  let searchWord = search.value.toLowerCase()
  let noteCard = Array.from(document.getElementsByClassName('noteCard'))

  if (noteCard.length == 0) {

  } else {
    noteCard.forEach(function (element) {
      let searchStr = element.getElementsByTagName('p')[0].innerText.toLowerCase()

      if (searchStr.includes(searchWord)) {
        element.style.display = 'block'
      } else {
        element.style.display = 'none'
      }

    })
  }
}

notesObject.showNotes()
