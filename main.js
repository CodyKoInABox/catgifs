//get a random cat fact from API
fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(data => updateFact(data))

//update the fact based on the API's response
function updateFact(data){
    console.log(data.fact)
    document.getElementById("fact").innerHTML = data.fact
}

//get a random cat GIF from API
fetch('https://cataas.com/cat/gif?json=true')
.then(response => (response).json())
.then(data => updateImage(data))

//update the image based on the API's response
function updateImage(data){
    console.log("https://cataas.com" + data.url)
    document.getElementById("image").src = "https://cataas.com" + data.url
}

//get the amount of GIFS that were displayed by the website from the counter API
fetch('https://api.countapi.xyz/get/codykoinabox.github.io/catgifscounter')
.then(response => (response).json())
.then(data => updateCounter(data))

//update the GIF amount based on the API's resonse
function updateCounter(data){
    console.log(data.value)
    document.getElementById("counterValue").innerHTML = data.value
}

// update the amount of cats that were displayed by the website from the counter API
// i feel like someone will just spam this but I hope not
fetch('https://api.countapi.xyz/update/codykoinabox.github.io/catgifscounter/?amount=1')