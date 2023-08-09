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
        + '<li>' + '<span class= text-green-500 semi-bold>Name:</span> ' + item.name + '</li><li><span class= text-green-500 semi-bold>Field:</span> ' + item.Field + 
        '</li><li><span class= text-green-500 semi-bold>Description:</span> ' + item.desc + '</li><li><span class= text-green-500 semi-bold>Link for website :</span><a href="' + item.Links +
        '" <u>' + item.name + '</u></a></li></ul></div>'

    })
    displayTarget.innerHTML += Projects
})