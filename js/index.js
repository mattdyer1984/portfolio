function togglemain () {
    document.querySelector('.main-body', '.enter-button').classList.add('visible')
    document.querySelector('.enter-button').classList.add('visible')
}

document.querySelector('#enter').addEventListener('click', togglemain)

clickCounter();

 function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.querySelector('.main-body', '.enter-button').classList.add('visible')
      document.querySelector('.enter-button').classList.add('visible')
    } 
  }