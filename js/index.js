fetch('projects.json')
.then((response) => {
    return response.json()
}).then((data) => {
    const displayTarget = document.querySelector('#projects')
    let Projects = ""
    data.projects.forEach((item) => {
        Projects +=  
        '<div><img src="' + item.img + '" alt="screen shot of website" width="250px" height="300px"></div>' +
        '<div><ul>'
        + '<li>' + '<strong>Name:</strong> ' + item.name + '</li><li><strong>Field:</strong> ' + item.Field + 
        '</li><li><strong>Description:</strong> ' + item.desc + '</li><li><a href="' + item.Links +
        '"><strong>Link for website :</strong> <u>' + item.name + '</u></a></li></ul></div>'

    })
    displayTarget.innerHTML += Projects
    
})
function togglemain () {
    document.querySelector('.main-body', '.enter-button').classList.add('visible')
    document.querySelector('.enter-button').classList.add('visible')
}

document.querySelector('#enter').addEventListener('click', togglemain)

