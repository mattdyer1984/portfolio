fetch('data.json')
.then((response) => {
    return response.json()
}).then((data) => {
    const displayTarget = document.querySelector('#projects')
    let Biscuits = ""
    data.biscuits.forEach((item) => {
        Biscuits += '<ul>' + 
        '<img src="' + item.img + '" alt="photo of named biscuit" width="200px" height="200px">'
        + '<li>' + 'Name: ' + item.name + '</li><li>RDT: ' + item.RDT + 
        '</li><li>Description: ' + item.desc + '</li><li><a href="' + item.wikipedia +
        '">Wiki Link for ' + item.name + '</a></li></ul>'


    })
    displayTarget.innerHTML += Biscuits
    
})