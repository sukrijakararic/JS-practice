
// buttons that change the color of the background on click
const switchTo = bgc => {
    if (bgc === 'red') {
        document.body.style.backgroundColor = "red";
    }
    else if (bgc === 'blue') {
        document.body.style.backgroundColor = "blue";
    }
    else if (bgc === 'green') {
        document.body.style.backgroundColor = "green";
    }
}

// takes an html element and injects html on click
const addText = () => {
    const header = document.getElementById("tag");
    header.innerHTML = "Hello World";
}


// an aray of animals
const animalArray = ["dog", "bird", "cow", "rabbit"];

// loops through the array and prints to the console
for (let i = 0; i < animalArray.length; i++) {
    console.log(animalArray[i]);
}


// an object of animals
let animalObject = {
    dog: "woof",
    cat: "meow",
    bird: "tweet",
}
 // to loop through the object and prints to the console
for (const key in animalObject) {
    console.log(`${key}:${animalObject[key]}`)
}