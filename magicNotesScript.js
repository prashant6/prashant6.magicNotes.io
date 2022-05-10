// making the x button appear when onfocus for searchbox
function onFocusFunction() {
  document.getElementById('xbtn').style.display = "inline-block"
  document.getElementById('searchBox').style.outline = '2px solid yellow';
}

// making the x button delete the search string from search string
function deleteSearchStr() {
  document.getElementById('searchInput').value = ''
  document.getElementById('xbtn').style.display = "none"
  searchStr()
}

// impltementing the addNote (add note to the document body) feature
function addNote() {
  let message = document.getElementById('message').value
  let note = document.createElement('div')
  let text = document.createElement('p')
  text.innerText = message

  let btn = document.createElement('button')
  btn = styleButton(btn)
  document.getElementById('message').value = ''

  note.appendChild(text)
  note.appendChild(btn)
  note.setAttribute('class', 'note')
  document.getElementById('yourNotes').insertAdjacentElement('afterend', note)
}

// style the 'Delete Note' button
function styleButton(btn) {
  btn.setAttribute('onclick', 'parentNode.remove()')
  btn.setAttribute('class', 'addNoteBtn2')
  btn.innerText = 'Delete Note'
  return btn
}

// search the string which appears in search box
function searchStr() {
  let message = document.getElementById('searchInput').value
  let eleCount = document.body.childElementCount - 3

  if (message == '') {
    document.getElementById('xbtn').style.display = "none"
    document.getElementById('searchBox').style.outline = 'none';
    // deleteSearchStr()
    displayVisible()
  } else {

    for (let i = 5; i <= eleCount; i++) {
      let eleStr = document.body.children[i].children[0].innerText.includes(`${message}`)

      if (!eleStr) {
        document.body.children[i].style.display = 'none'
      }
    }
  }
}

// making all the notes appear in document body if search string in not present in any of the notes
function displayVisible() {
  let eleCount = document.body.childElementCount - 3
  for (let i = 5; i <= eleCount; i++) {
    document.body.children[i].style.display = 'inline-block'
  }
}
