let dest=document.getElementById("input_text");
let button=document.getElementById("button");
// let name1=document.getElementById("name");
let temp=document.getElementById("temp");
let desc=document.getElementById("desc");
button.addEventListener("click",function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+dest.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(jay=>jay.json())
    .then(abhinav => 
        {
        var temp_=abhinav['main']['temp'];
        var desc_=abhinav['weather'][0]['description'];
        temp.innerHTML=temp_;
        desc.innerHTML=desc_;
    })

})
