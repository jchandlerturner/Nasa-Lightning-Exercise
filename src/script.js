
//3. Write a template function that will return a DOM component with the image, date, explanation, title, and copyright. Remember to use semantic HTML.

const spaceContainer = document.querySelector(".spacepic")

//4. Write a function that will display the component on the DOM.*/

function createNasa (NasaObj) {
    let Nasaphoto =
    `<div>
        <img src="${NasaObj.url}">
        <p>Date: ${NasaObj.date}</p>
        <p>Explanation: ${NasaObj.explanation}</p>
        <p>Copyright: ${NasaObj.copyright}</p>
    </div>
        `
    return Nasaphoto;
}

function createNasaContainer(data){
    spaceContainer.innerHTML += data;
}

//1. Using this url, fetch data related to NASA’s picture of the day.

fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(response => response.json()) 
    .then(parsedData => {
        console.table(parsedData)
        createNasaContainer(createNasa(parsedData))
    })
