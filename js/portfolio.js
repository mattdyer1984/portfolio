fetch('projects.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const displayTarget = document.querySelector('#projects');
    let Projects = "";

    data.projects.forEach((item, index) => {
      Projects +=
        '<div class="project">' +
        '<img class="thumbnail" src="' + item.img + '" alt="screen shot of website" width="250px" height="300px">' +
        '</div>'+
        '<div>'+
        '<ul>' +
        '<li><span class="text-green-500 semi-bold">Name:</span> ' + item.name + '</li>' +
        '<li><span class="text-green-500 semi-bold">Field:</span> ' + item.Field + '</li>' +
        '<li><span class="text-green-500 semi-bold">Description:</span> ' + item.desc + '</li>' +
        '<li><span class="text-green-500 semi-bold">Link for website:</span><a href="' + item.Links + '"><u>' + item.name + '</u></a></li>' +
        '</ul></div>' +
        '<div class="modal">' +
        '<span class="close">&times;</span>' +
        '<img class="modal-content">' +
        '</div>';

    });

    displayTarget.innerHTML += Projects;

    let modals = document.querySelectorAll(".modal");
    let modalImgs = document.querySelectorAll(".modal-content");
    let closeButtons = document.querySelectorAll(".close");
    let thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.onclick = function() {
        modals[index].style.display = "block";
        modalImgs[index].src = this.src;
      }

      closeButtons[index].onclick = function() {
        modals[index].style.display = "none";
      }
    });

    window.onclick = function(event) {
      modals.forEach((modal) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    }
  });
