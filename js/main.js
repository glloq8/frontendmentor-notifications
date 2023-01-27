const readAll = document.querySelector('.read-all')
const notifsNew = document.querySelectorAll('.notif.new')
const bubble = document.querySelector('.header .title span')

readAll.addEventListener('click', function() {

  for (const notif of notifsNew) {
    
    notif.classList.remove('new')
    bubble.innerHTML = "0"

  }

})