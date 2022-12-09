 var token = config.APIKEY
let text=document.getElementById("city")
let btn=document.getElementById("btn")
let temp=document.getElementById("temp")
let desc=document.getElementById("description")
let toast = document.getElementById("toast-warning")
let cross= document.getElementById("cross")
const successCallback = (position) => {
    console.log(position)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude }&lon=${position.coords.longitude}&appid=${token}`)
    .then(res=>
        res.json()
       
    ).then(res=>{
        temp.innerHTML= "Temperature is " + (Math.floor((res.main.temp)-273)) + " &#8451"
       let description = res.weather[0].description
       let uppercaseDesc= description.charAt(0).toUpperCase() + description.slice(1);
       desc.innerText=uppercaseDesc
       
    })
    .catch((e)=>{
        console.log(e) 
        alert("enter valid location")
    })
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
btn.onclick=function(){
    console.log(text)
    if(text.value==''){
        toast.classList.remove("hidden");
       
    }
    else{
        let loc=text.value
        console.log(loc)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=e07d3bf7c4c755b4917c7cf94b1cba1c`)
        .then(res=>
            res.json()
           
        ).then(res=>{
            temp.innerHTML= "Temperature is " + (Math.floor((res.main.temp)-273)) + " &#8451"
            let description = res.weather[0].description
            let uppercaseDesc= description.charAt(0).toUpperCase() + description.slice(1);
            desc.innerText=uppercaseDesc
            toast.classList.add("hidden")
        })
        .catch((e)=>{
            console.log(e)
            
            alert("enter valid location")
        })
        
    }
    text.value=""
}
cross.onclick=()=>toast.classList.add("hidden")
