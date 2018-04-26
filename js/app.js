// Model
var data = {
    cats : [
        {name: "cat1",count:0},
        {name: "cat2",count:0},
        {name: "cat3",count:0},
        {name: "cat4",count:0},
        {name: "cat5",count:0},
    ]
}
// view
listCats = () => {
    // construct buttons
    var buttons = data.cats.map((x,i) => `<button id='button${i+1}'>${x.name}</button>`)
    // append to display
    buttons.map(x => $('.displaycats').append(x))
}
// Controller
octopus = () => bindButtonstoCat()
// bind buttons
bindButtonstoCat = () => {
    buttons = $('.displaycats > button')
    for(var i=0;i<buttons.length;i++) {
        var but = buttons[i];
        $(but).click(function() {
            showImage(this.innerText);
            showImgCount(data.cats.filter(x => x.name === this.innerText)[0].count);
            bindImgCount(this.innerText);
        });
    }
}
showImage = catName => $('.displaycatimage').html(`<img alt=${catName} id="${catName}" src="images/${catName}.jpg">`)
showImgCount = count => $('.displayclickcount').html(count)
bindImgCount = catName => {
    $(`#${catName}`).click(function() {
        var count = $('.displayclickcount').text()
        count = parseInt(count) + 1
        $('.displayclickcount').text(count)
        // store count
        for(var i = 0;i < data.cats.length; i++) {
            if(data.cats[i].name === $(this).attr('id')) {
                data.cats[i].count = count;
            }
        }
    })
}
init = () => {
    showImage(data.cats[0].name)
    showImgCount(0)
    bindImgCount(data.cats[0].name)
}
// calling view
listCats()
// calling model
octopus()
// load initial details
init()
