const myModal = document.getElementById('exampleModalToggle')
const myInput = document.getElementById('myInput')
const modalButton = document.getElementById("modal-button")



myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

