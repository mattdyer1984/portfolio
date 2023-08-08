fetch('projects.json')
.then((response) => {
    return response.json()
}).then((data) => {
    const displayTarget = document.querySelector('#projects')
    let Projects = ""
    data.biscuits.forEach((item) => {
        Projects +=  
        '<div><img src="' + item.img + '" alt="photo of named biscuit" width="250px" height="250px"></div>' +
        '<div><ul>'
        + '<li>' + 'Name: ' + item.name + '</li><li>Field: ' + item.Field + 
        '</li><li>Description: ' + item.desc + '</li><li><a href="' + item.Links +
        '">Link for website : ' + item.name + '</a></li></ul></div>'

    })
    displayTarget.innerHTML += Projects
    
})

