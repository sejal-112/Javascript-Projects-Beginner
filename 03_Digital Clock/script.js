const clock = document.getElementById('clock')

// let date = new Date();
// console.log(date.toLocaleTimeString());
// har moment pe run ho

// setInterval(function(){}, 1000) // syntax esa hi hota hai


// ye method har second run kar raha hai
setInterval(function(){
    let date = new Date();
//    console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();
}, 1000)


