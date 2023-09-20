fetch('projects.json')
.then((response) => {
    return response.json()
}).then((data) => {
    const displayTarget = document.querySelector('#projects')
    let Projects = ""
    data.projects.forEach((item) => {
        Projects +=  
        '<div><img class="thumbnail" src="' + item.img + '" alt="screen shot of website" width="250px" height="300px"></div>' +
        '<div><ul>'
        + '<li>' + '<span class= text-green-500 semi-bold>Name:</span> ' + item.name + '</li><li><span class= text-green-500 semi-bold>Field:</span> ' + item.Field + 
        '</li><li><span class= text-green-500 semi-bold>Description:</span> ' + item.desc + '</li><li><span class= text-green-500 semi-bold>Link for website :</span><a href="' + item.Links +
        '" <u>' + item.name + '</u></a></li></ul></div>'+
        '<div class="modal">'+
        '<span class="close">&times;</span>'+
        '<img class="modal-content">'+
        '</div>'
        

    })
    displayTarget.innerHTML += Projects
   
var projects = document.getElementsByClassName("project");


for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var modal = project.querySelector(".modal");
    var modalImg = project.querySelector(".modal-content");
    var closeModal = project.querySelector(".close");
    var thumbnail = project.querySelector(".thumbnail");

    thumbnail.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }


    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

    
})
