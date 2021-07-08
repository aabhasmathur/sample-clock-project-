
setInterval(() => {
    d = new Date();
    h= d.getHours();
    m= d.getMinutes();
    s= d.getMilliseconds();
    s1= d.getSeconds();
   document.getElementById("hour").style.transform = `rotate(${h*30}deg)`;
   document.getElementById("minutes").style.transform = `rotate(${6*m}deg)`;
   document.getElementById("seconds").style.transform = `rotate(${6*s1}deg)`;
}, 1);
a = ()=>(
    console.log("hi")
);
setInterval(a,10)
