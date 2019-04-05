
window.addEventListener("load", ()=> {

let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimeZone = document.querySelector('.location-timezone');

if(window.navigator.geolocation)
{

    navigator.geolocation.getCurrentPosition(position=>{
        lat = position.coords.latitude;
        long = position.coords.longitude;
        
        const proxy = "http://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/f84c2b7c4772ce8b43398a71a1e30937/${lat},${long}`;

        fetch(api).then(response => {
           return response.json();
        }).then(data => {
           
           temperatureDegree.textContent = data.currently.temperature;
           temperatureDescription.textContent = data.currently.summary;
           locationTimeZone.textContent = data.timezone;
 
           console.log(data.currently.icon);
           setIcon(data.currently.icon,document.querySelector('.icon'));
        })
             
        
    });



}


function setIcon(icon,iconId)
{
    const skycons = new Skycons({"color": "white"});
    const currentIcon = icon.replace(/-/g,'_').toUpperCase();
    console.log(currentIcon);
    skycons.play();
    return skycons.set(iconId,currentIcon);
}



});

/** 
function getPosts()
{
    let req = new XMLHttpRequest();
    req.open('GET','https://jsonplaceholder.typicode.com/posts');
    req.onload = function(){
        if( req.status == 200 )
        {
            console.log( JSON.parse(req.response));
        }else{
            console.log('faie');
        }
    }
    
    req.send();
}


console.log('gad');
getPosts();
console.log('ff');
*/


