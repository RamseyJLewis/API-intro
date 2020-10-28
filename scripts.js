


//cars
let body = document.querySelector('body')

function getReq(){
let res = {
    'Porsche': {name: 'Porsche Taycan', HighestMPH: 200, Fast: true, parts:['wheels', 'wheels', 'Brakes'], img: 'https://www.teslarati.com/wp-content/uploads/2019/09/porsche-taycan-green-2-1280x720.jpg'},
    'Mercade': {name: 'Mercade GTR', HighestMPH: 160, Fast: true, parts:['wheels', 'wheels', 'Brakes'], img: 'https://cdn.motor1.com/images/mgl/noe8l/s1/2018-mercedes-amg-gt-r-first-drive.jpg'},
    'McLaren': {name: 'McLaren Spider', HighestMPH: 212, Fast: true, parts:['wheels', 'wheels', 'Brakes'],  img: 'https://selectexoticcars.com/wp-content/uploads/2019/05/1543e3b8522045e8af271d56a2d72c86-min.jpg'},
    'Fiat': {name: 'Fiat 500', HighestMPH: 120, Fast: false, parts:['wheels', 'wheel', 'Brakes',],img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Fiat_500_green.JPG/1200px-Fiat_500_green.JPG'},
}
    for (let key in res){
        console.log(res[key])

        //First you have to create elements 
        let banner = document.createElement('img');
        let newTitle = document.createElement('h1');
        let parts = document.createElement('p');
        let card = document.createElement('div');

        //second set any attributes 
        card.setAttribute('class','card');

        //third 
        banner.src = res[key].img;
        newTitle.innerText = res[key].name;
        parts.innerText = res[key].parts;
         
        card.appendChild(banner);
        card.appendChild(newTitle);
        card.appendChild(parts);
        
        
        body.appendChild(card);


    }
}

console.log(getReq())